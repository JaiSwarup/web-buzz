import About from "../components/About"
import Hero from "../components/Hero"
import { useNavigate } from "react-router-dom"

const Root = () => {
  const navigate = useNavigate()
  const handleSponsor = () =>{
    navigate('/sponsor')
  }
  const handlePlayer = () =>{
    navigate('/player')
  }
  return (
    <>
    <main className="flex w-full flex-col justify-center items-center">
      <Hero />
      <div className="flex gap-4">

      <button className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        mt-10
      " onClick={()=>handleSponsor()}>
        Host a Tournament
      </button>
      <button className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        mt-10
        " onClick={()=>handlePlayer()}>
        Participate
      </button>
      </div>
      <About />
    </main>
    </>
  )
}
export default Root