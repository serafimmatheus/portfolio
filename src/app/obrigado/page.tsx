import Link from 'next/link'
import { Button } from '../_components/ui/button'
import { LinkedinIcon } from '../_icons/linkedin-icon'
import { Home } from 'lucide-react'

function TankyouPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-semibold text-primary md:text-4xl">
        Obrigado por enviar sua mensagem!
      </h1>
      <p className="text-foreground md:text-lg">
        Logo entrarei em contato. Para um retorno mais rápido, por favor, entre
        em contato comigo pelo LinkedIn.
      </p>
      <div className="flex gap-4">
        <Button className="flex gap-2 text-white" asChild>
          <Link
            href="https://www.linkedin.com/in/matheus-serafim-753893a7/"
            target="_blank"
          >
            LinkedIn
            <LinkedinIcon size={24} />
          </Link>
        </Button>

        <Button variant="outline" className="flex gap-2 text-white" asChild>
          <Link
            href="https://www.linkedin.com/in/matheus-serafim-753893a7/"
            target="_blank"
          >
            Voltar para o site
            <Home size={18} />
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default TankyouPage
