import { FacebookIcon } from '@/app/_icons/facebook-icon'
import { InstagramIcon } from '@/app/_icons/instagram-icon'
import { LinkedinIcon } from '@/app/_icons/linkedin-icon'
import Link from 'next/link'

export function Social() {
  return (
    <ul className="flex gap-3">
      <li>
        <Link
          href={'https://www.linkedin.com/in/matheus-serafim-753893a7/'}
          target="_blank"
        >
          <LinkedinIcon size={24} />
        </Link>
      </li>

      <li>
        <Link href={'https://www.facebook.com/MathSerafim'} target="_blank">
          <FacebookIcon size={24} />
        </Link>
      </li>

      <li>
        <Link href={'https://www.instagram.com/matheuso_s/'} target="_blank">
          <InstagramIcon size={24} />
        </Link>
      </li>
    </ul>
  )
}
