import { Footer } from '../(home)/_components/footer'
import { Header } from '../(home)/_components/header'
import ProjectCards from '../_components/ui/projects-card'
import { allProjects } from '../api/mock'

function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto mb-16 mt-16 w-full max-w-[1440px] px-5">
        <h1 className="text-4xl font-semibold text-primary">Projetos</h1>

        <div className="mt-8 grid grid-cols-4 gap-5">
          {allProjects.map((project) => (
            <ProjectCards key={project.title} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProjectsPage
