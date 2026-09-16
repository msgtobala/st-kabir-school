import { type Story } from '@/models/home/stories'
import { starBlue, starGold, starTeal } from '@/resources/icons'

export const stories: Story[] = [
  {
    id: 'sharad-patel',
    cardClass: 'bg-story-gold',
    shadowClass: 'shadow-card',
    star: starGold,
    quote: (
      <div className="text-[14px] font-light leading-[1.6] text-muted-mid">
        <p>
          Choosing St. Kabir School, Naranpura, has been one of the best
          decisions. My twins have become independent & confident.
        </p>
        <p className="font-medium text-[20px] leading-[1.35] text-navy">
          My kids feel safe, valued, and genuinely excited to go to school
          every morning.
        </p>
        <p>
          Seeing my kids blossom into confident young learners has been a truly
          rewarding experience.
        </p>
      </div>
    ),
    name: 'Sharad Patel',
    role: "Aashna & Amaan Patel's father(Jr.KG - A)",
  },
  {
    id: 'shalin-rutu-patel',
    cardClass: 'bg-story-mint',
    shadowClass: 'shadow-teal',
    star: starTeal,
    quote: (
      <div className="flex flex-col gap-4 text-[14px] font-light leading-[1.6] text-muted-mid">
        <p>
          Since Junior KG, we have seen Monira grow from a shy child into a
          confident and expressive one. We are grateful to her teachers for
          their love, guidance, and encouragement in bringing out the best in
          her.
        </p>
        <p className="font-medium text-[20px] leading-[1.35] text-navy">
          Thank you, St. Kabir School!
        </p>
      </div>
    ),
    name: 'Shalin Patel  Rutu Patel',
    role: 'Parents of Monira',
  },
  {
    id: 'patel-family',
    cardClass: 'bg-story-sky',
    shadowClass: 'shadow-card',
    star: starBlue,
    quote: (
      <div className="flex flex-col gap-4">
        <p className="font-medium text-[20px] leading-[1.35] text-navy">
          &ldquo;A school that truly cares about every child.&rdquo;
        </p>
        <p className="text-[14px] font-light leading-[1.6] text-muted-mid">
          &ldquo;From the moment we walked in, we felt the warmth of St. Kabir.
          Our son has flourished academically and socially - it&apos;s been a
          life-changing experience for our whole family.&rdquo;
        </p>
      </div>
    ),
    name: 'The Patel Family',
    role: 'Parent of a Middle School Student',
  },
]
