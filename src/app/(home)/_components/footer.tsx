import { Social } from './social'

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1410px] px-5 py-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <span>@2021 Matheus Serafim</span>
          <Social />
        </div>

        <ul className="flex flex-wrap items-center gap-8">
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
