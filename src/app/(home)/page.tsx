import { Eye, User } from 'lucide-react'
import { Button } from '../_components/ui/button'
import { Header } from './_components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto mt-12 max-w-[1410px] px-5">
        <section className="relative grid grid-cols-3 items-center">
          <div className="col-span-2">
            <h2>Olá, eu sou</h2>
            <h2>Matheus Serafim.</h2>
            <p className="w-full max-w-[435px]">
              Sou um desenvolvedor Full Stack apaixonado, especializado em criar
              soluções web completas e intuitivas. Vamos transformar suas ideias
              em realidade!
            </p>

            <div className="space-x-4">
              <Button>
                Sobre
                <User className="ml-2" size={16} />
              </Button>

              <Button>
                Projetos
                <Eye className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          <div className="col-span-1">
            <Image
              src="/perfil.png"
              alt="matheus serafim"
              width={486}
              height={432}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[128px] w-full bg-background" />
        </section>
      </main>

      <footer></footer>
    </>
  )
}
