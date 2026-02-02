import Home from "../components/Home"
import Project from "../components/Project"
import Skills from "../components/Skills"
import About from "../components/About"

export default function MainPage() {
  return (
    <>
      <Home />
      <Project />
      <Skills />
      <About />
      <div className="z-50  bg-transparent pointer-events-none h-[50vh]" />
    </>
  )
}
