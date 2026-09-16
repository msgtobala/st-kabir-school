import { readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const IMAGES = path.join(ROOT, 'src/assets/images')

const MAX_WIDTH = {
  brand: 480,
  enquiry: 720,
  hero: 2880,
  day: 2880,
  callout: 2560,
  journey: 800,
  beyond: 960,
  family: 960,
  educators: 1280,
  gallery: 1400,
  footer: 1470,
}

const SKIP_LQIP = new Set(['brand/logo.png'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (entry.name.endsWith('.png') && !entry.name.endsWith('.lqip.png')) {
      files.push(full)
    }
  }
  return files
}

function maxWidthFor(rel) {
  const folder = rel.split('/')[0]
  return MAX_WIDTH[folder] ?? 1400
}

async function optimize(file) {
  const rel = path.relative(IMAGES, file).replaceAll('\\', '/')
  const input = sharp(file, { failOn: 'none' })
  const meta = await input.metadata()
  const sourceW = meta.width ?? 1
  const sourceH = meta.height ?? 1
  const cap = maxWidthFor(rel)
  const width = Math.min(sourceW, cap)
  const height = Math.round((sourceH * width) / sourceW)
  const hasAlpha = Boolean(meta.hasAlpha)

  const pipeline = () => {
    const img = sharp(file, { failOn: 'none' })
    return width < sourceW ? img.resize(width, height) : img
  }

  const base = file.slice(0, -4)
  const before = (await stat(file)).size

  await pipeline()
    .webp({ quality: 78, alphaQuality: 80, effort: 4 })
    .toFile(`${base}.webp`)

  await pipeline()
    .avif({ quality: 50, effort: 4 })
    .toFile(`${base}.avif`)

  const pngBuffer = await pipeline()
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer()
  if (pngBuffer.length < before) {
    await writeFile(file, pngBuffer)
  }

  let lqip = null
  if (!SKIP_LQIP.has(rel)) {
    lqip = `${base}.lqip.webp`
    await sharp(file, { failOn: 'none' })
      .resize(24, Math.max(1, Math.round((24 * height) / width)), {
        fit: 'inside',
      })
      .webp({ quality: 40 })
      .toFile(lqip)
  }

  const afterPng = (await stat(file)).size
  const afterWebp = (await stat(`${base}.webp`)).size
  const afterAvif = (await stat(`${base}.avif`)).size

  return {
    rel,
    width,
    height,
    hasAlpha,
    beforeKb: +(before / 1024).toFixed(1),
    pngKb: +(afterPng / 1024).toFixed(1),
    webpKb: +(afterWebp / 1024).toFixed(1),
    avifKb: +(afterAvif / 1024).toFixed(1),
    lqip: Boolean(lqip),
  }
}

const files = await walk(IMAGES)
const results = []
for (const file of files) {
  results.push(await optimize(file))
}

results.sort((a, b) => a.rel.localeCompare(b.rel))
console.table(results)
const before = results.reduce((sum, row) => sum + row.beforeKb, 0)
const webp = results.reduce((sum, row) => sum + row.webpKb, 0)
const avif = results.reduce((sum, row) => sum + row.avifKb, 0)
console.log(
  `PNG before ${before.toFixed(0)} KB → WebP ${webp.toFixed(0)} KB / AVIF ${avif.toFixed(0)} KB`,
)
console.log(JSON.stringify(Object.fromEntries(results.map((row) => [row.rel, { width: row.width, height: row.height, lqip: row.lqip }])), null, 2))
