import {
  IconType,
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiX,
  SiStackoverflow,
  SiWhatsapp,
  SiFacebook,
  SiHackerrank,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    { icon: SiGmail, href: 'mailto:nitinkumar30.py@gmail.com' },
    { icon: SiGithub, href: 'https://github.com/nitinkumar30' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/nitin30kumar/' },
    { icon: SiX, href: 'https://twitter.com/nitinkumar30' },
    { icon: SiInstagram, href: 'https://www.instagram.com/nitinkumar30.py/' },
    { icon: SiFacebook, href: 'https://www.facebook.com/b1AcK6AG16' },
    { icon: SiStackoverflow, href: 'https://stackoverflow.com/users/10957470/nitin-kumar' },
    { icon: SiWhatsapp, href: 'https://wa.me/919113797199?text=Hi%20Nitin.' },
    { icon: SiHackerrank, href: 'https://www.hackerrank.com/black30Eagle' },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-6">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
