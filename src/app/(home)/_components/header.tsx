import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/app/_components/ui/sheet'

import { Folder, Home, Leaf, Menu, NotebookTabs } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header>
      <Card className="hidden rounded-none border-none lg:block">
        <CardContent className="mx-auto flex max-w-[1410px] items-center justify-between py-6">
          <h1 className="text-2xl font-semibold text-primary">
            Matheus Serafim
          </h1>

          <ul className="flex space-x-20 text-lg">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/'}>Sobre</Link>
            </li>
            <li>
              <Link href={'/'}>Projetos</Link>
            </li>
            <li>
              <Link href={'/'}>Contato</Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between px-5 py-4 lg:hidden">
        <h2 className="text-xl font-semibold text-primary">Matheus Serafim</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col">
              <ul className="space-y-4">
                <li>
                  <Link href={'/'}>
                    <SheetClose className="flex items-center gap-3">
                      <Home size={18} />
                      Home
                    </SheetClose>
                  </Link>
                </li>

                <li>
                  <Link href={'/'} className="flex items-center gap-3">
                    <SheetClose className="flex items-center gap-3">
                      <Leaf size={18} />
                      Sobre
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className="flex items-center gap-3">
                    <SheetClose className="flex items-center gap-3">
                      <Folder size={18} />
                      Projetos
                    </SheetClose>
                  </Link>
                </li>
                <li>
                  <Link href={'/'} className="flex items-center gap-3">
                    <SheetClose className="flex items-center gap-3">
                      <NotebookTabs size={18} />
                      Contato
                    </SheetClose>
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
