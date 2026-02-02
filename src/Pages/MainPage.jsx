import Home from "../components/Home"
import Project from "../components/Project"
import Skills from "../components/Skills"
import About from "../components/About"



export default function MainPage() {
  return (
    <><div className="relative bg-transparent">
      </div>
    <div className="relative bg-transparent">
      <Home /></div>
      <div className="relative bg-transparent"><Project /></div>
      <div className="relative bg-transparent"><Skills /></div>
      <div className="relative bg-transparent"><About /></div>

      {/* 👇 THIS IS MUST FOR REVEAL */}
      <div className="h-[50vh] pointer-events-none" />
    
 </> )
}
