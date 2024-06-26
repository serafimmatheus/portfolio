import Image from 'next/image'
import { Card, CardContent } from './card'
import { Button } from './button'
import { Eye, SquareDashedBottomCode } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardsProps {
  project: {
    title: string
    description: string
    image: string
    link: string
    repo: string
  }
}

function ProjectCards({ project }: ProjectCardsProps) {
  return (
    <Card className="h-full rounded-sm border-primary bg-transparent p-4">
      <CardContent className="flex h-full flex-col items-stretch justify-between space-y-2 p-0 text-center">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="mx-auto h-[200px] w-[300px] rounded-sm object-cover"
        />
        <h2 className="text-2xl font-semibold uppercase text-primary">
          {project.title}
        </h2>
        <p className="text-foreground">{project.description}</p>

        <div className="flex w-full gap-3 pt-8">
          <Button className="w-1/2 text-white" asChild>
            <Link href={project.link} target="_blank">
              Ver projeto
              <Eye size={16} className="ml-2" />
            </Link>
          </Button>

          {project.repo && (
            <Button className="w-1/2 text-white" asChild>
              <Link href={project.repo} target="_blank">
                Ver código
                <SquareDashedBottomCode size={16} className="ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCards
