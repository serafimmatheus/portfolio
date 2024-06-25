import { Social } from './social'

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1410px] px-5 py-10">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <span>@2021 Matheus Serafim</span>
          <Social />
        </div>

        <ul className="flex items-center gap-8">
          <li>#Digital Ocean</li>
          <li>#AWS</li>
          <li>#Docker</li>
          <li>#Postgres</li>
          <li>#WebSockt</li>
          <li>#Python</li>
          <li>#Express</li>
          <li>#Nestjs</li>
        </ul>
      </div>
    </footer>
  )
}
