import { Card, CardContent } from '@/app/_components/ui/card'

export function Header() {
  return (
    <header>
      <Card className="rounded-none border-none">
        <CardContent className="mx-auto flex max-w-[1410px] items-center justify-between py-6">
          <h1 className="text-2xl font-semibold text-primary">
            Matheus Serafim
          </h1>

          <ul className="flex space-x-8">
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </CardContent>
      </Card>
    </header>
  )
}
