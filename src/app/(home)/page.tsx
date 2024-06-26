'use client'

import {
  Eye,
  SquareDashedBottomCode,
  TabletSmartphone,
  User,
} from 'lucide-react'
import { Button } from '../_components/ui/button'
import { Header } from './_components/header'
import Image from 'next/image'
import { Card, CardContent } from '../_components/ui/card'
import { NodeIcon } from '../_icons/node-icon'
import { GitRepoIcon } from '../_icons/git-repo-icon'
import { WebScrapingIcon } from '../_icons/web-scraping'

import { useForm } from 'react-hook-form'
import { Input } from '../_components/ui/input'
import { Textarea } from '../_components/ui/textarea'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Social } from './_components/social'
import { Footer } from './_components/footer'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../_components/ui/carousel'

const schemaMessage = z.object({
  name: z.string().nullable(),
  email: z.string().email(),
  message: z.string().nullable(),
})

type Message = z.infer<typeof schemaMessage>

export default function Home() {
  const { register, handleSubmit, reset } = useForm<Message>({
    resolver: zodResolver(schemaMessage),
  })

  async function handleMessage(data: Message) {
    console.log(data)

    reset()
  }

  return (
    <>
      <Header />

      <main>
        <section className="relative">
          <div className="mx-auto mt-12 grid max-w-[1410px] grid-cols-1 items-center px-5 lg:grid-cols-2">
            <div className="col-span-1 mx-auto lg:mx-0">
              <h2 className="mb-6 text-3xl font-semibold text-white">
                Olá, eu sou
              </h2>
              <h2 className="mb-3 text-5xl font-semibold text-white">
                Matheus Serafim.
              </h2>
              <p className="mb-3 w-full max-w-[435px] text-foreground">
                Sou um desenvolvedor Full Stack apaixonado, especializado em
                criar soluções web completas e intuitivas. Vamos transformar
                suas ideias em realidade!
              </p>

              <div className="space-x-4">
                <Button type="button" className="font-medium text-white">
                  Sobre
                  <User className="ml-2" size={16} />
                </Button>

                <Button type="button" className="font-medium text-white">
                  Projetos
                  <Eye className="ml-2" size={16} />
                </Button>
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <Image
                src="/perfil.png"
                alt="matheus serafim"
                width={486}
                height={432}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[128px] w-full bg-card" />
        </section>

        <section className="mx-auto mt-12 max-w-[1410px] px-5">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Sobre:
          </h2>
          <p className="mt-3 text-base md:text-lg">
            Sou um desenvolvedor Full Stack apaixonado e dedicado, com ampla
            experiência na criação de soluções web completas e funcionais. Com
            um profundo entendimento de tecnologias de front-end e back-end, eu
            me especializo em construir experiências digitais intuitivas e
            eficientes. Vamos transformar suas ideias em realidade!
          </p>

          <div className="">
            <div className="flex items-center gap-6">
              <h2 className="text-2xl font-bold text-primary sm:text-6xl md:text-8xl">
                2+
              </h2>
              <p className="mt-2 text-base font-medium text-foreground sm:text-lg md:mt-0 md:text-2xl">
                Anos de experiência. Especializado na criação de web sites,
                garantindo uma experiência web perfeita para os usuários finais.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4">
              <Card className="rounded-sm bg-primary px-5 pb-4 pt-16">
                <CardContent className="space-y-2 p-0">
                  <SquareDashedBottomCode size={32} />
                  <p className="uppercase">Desenvolvedor web</p>
                </CardContent>
              </Card>

              <Card className="rounded-sm bg-foreground px-5 pb-4 pt-16">
                <CardContent className="space-y-2 p-0">
                  <TabletSmartphone size={32} />
                  <p className="uppercase">Desenvolvedor Mobile</p>
                </CardContent>
              </Card>

              <Card className="rounded-sm bg-foreground px-5 pb-4 pt-16">
                <CardContent className="space-y-2 p-0">
                  <NodeIcon size="32" />
                  <p className="uppercase">Web scraping Com node</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1410px] px-5">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">
            Os serviços que ofereço:
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Card className="rounded-sm border-primary bg-transparent px-5 pb-4 pt-16">
              <CardContent className="space-y-2 p-0 text-center">
                <SquareDashedBottomCode size={32} className="mx-auto" />
                <p className="font-bold uppercase text-primary">
                  Desenvolvedor web
                </p>
                <p className="text-foreground">
                  Crio interfaces bonitas com HTML, CSS e JavaScript simples,
                  além de framework como ReactJS
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-foreground bg-transparent px-5 pb-4 pt-16">
              <CardContent className="space-y-2 p-0 text-center">
                <TabletSmartphone size={32} className="mx-auto" />
                <p className="font-bold uppercase">Desenvolvedor Mobile</p>
                <p className="text-foreground">
                  Sou um desenvolvedor mobile especialista, com experiência em
                  Flutter e React Native.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-primary bg-transparent px-5 pb-4 pt-16">
              <CardContent className="space-y-2 p-0 text-center">
                <div className="flex w-full justify-center">
                  <GitRepoIcon size={32} />
                </div>
                <p className="font-bold uppercase text-primary">
                  CONTROLE DE VERSÃO
                </p>
                <p className="text-foreground">
                  Utilizo bem sistemas de controle de versão, o Git é minha
                  ferramenta preferida.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-foreground bg-transparent px-5 pb-4 pt-16">
              <CardContent className="space-y-2 p-0 text-center">
                <div className="flex w-full justify-center">
                  <NodeIcon size="32" />
                </div>
                <p className="font-bold uppercase">NPM E NODEJS</p>
                <p className="text-foreground">
                  Eu tenho um entendimento básico do NPM. Também consigo
                  desenvolver aplicações de propósito geral com o Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-primary bg-transparent px-5 pb-4 pt-16">
              <CardContent className="space-y-2 p-0 text-center">
                <div className="flex w-full justify-center">
                  <WebScrapingIcon size={34} />
                </div>
                <p className="font-bold uppercase text-primary">WEB SCRAPING</p>
                <p className="text-foreground">
                  Eu consigo coletar conteúdo e dados da internet e manipulá-los
                  e analisá-los conforme necessário.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="mx-auto mt-20 max-w-[1410px] px-5">
            <h2 className="text-2xl font-semibold text-primary md:text-3xl">
              Projetos em destaque:
            </h2>
            <p className="mt-2 w-full text-base font-medium sm:w-2/3 md:text-lg">
              Eu trabalhei em muitos projetos ao longo da minha carreira como
              desenvolvedor web. Aqui estão alguns dos meus projetos ao vivo e
              do mundo real:
            </p>
          </div>

          <div className="mt-8 select-none pl-5 md:pl-8">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[75%] md:basis-[45%] lg:basis-[30%] 2xl:basis-[20%]"
                  >
                    <div className="p-1">
                      <Card className="rounded-sm border-primary bg-transparent p-4">
                        <CardContent className="space-y-2 p-0 text-center">
                          <Image
                            src="https://via.placeholder.com/300x200"
                            alt="imagem"
                            width={300}
                            height={200}
                            className="mx-auto rounded-sm"
                          />
                          <h2 className="text-2xl font-semibold uppercase text-primary">
                            Serafa suplementos
                          </h2>
                          <p className="text-foreground">
                            E-commerce construido em nextjs, com integração com
                            o stripe.
                          </p>

                          <div className="flex w-full gap-3 pt-8">
                            <Button className="w-1/2 text-white">
                              Ver projeto
                              <Eye size={16} className="ml-2" />
                            </Button>

                            <Button className="w-1/2 text-white">
                              Ver código
                              <SquareDashedBottomCode
                                size={16}
                                className="ml-2"
                              />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 bg-primary text-white" />
              <CarouselNext className="right-4 bg-primary text-white" />
            </Carousel>
          </div>

          <div className="mx-auto flex w-full max-w-[1410px] justify-end">
            <Button variant="link" className="mt-8 flex text-white" asChild>
              <Link href={'/projetos'}>Ver mais projetos</Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto mb-12 mt-20 max-w-[1410px] px-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary md:text-3xl">
                Conecte-se comigo:
              </h3>
              <p className="w-full max-w-[425px] text-base md:text-lg">
                Satisfeito comigo? Por favor, entre em contato comigo.
              </p>

              <Social />
            </div>

            <div className="mt-8 space-y-4 md:mt-0">
              <h3 className="text-lg md:text-2xl">
                Entre em contato comigo, vamos criar algo incrível juntos.
              </h3>

              <form
                onSubmit={handleSubmit(handleMessage)}
                className="space-y-6"
              >
                <Input
                  placeholder="Nome:"
                  className="h-14"
                  {...register('name')}
                />
                <Input
                  placeholder="Email:"
                  className="h-14"
                  {...register('email')}
                />
                <Textarea
                  placeholder="Deixe sua menssagem:"
                  {...register('message')}
                  className="h-32 resize-none"
                />

                <Button type="submit" className="w-full font-bold text-white">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
