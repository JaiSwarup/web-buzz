import toast, {Toaster} from "react-hot-toast"
const Sponsor = () => {
    const handleClick = () =>{
        toast.error('We are currently working on this feature. Please check back later')
    }

  return (
    <div className="flex flex-col w-full items-center mt-10 gap-12 h-screen">
        <h1 className="text-6xl font-extrabold text-center">Thinking of <br /> Hosting a tournament?</h1>
        <h2 className="text-4xl font-bold text-center">Look no further!</h2>
        <p className="text-center text-xl text-medium">Let's get started with the tournament</p>
        <button className="bg-blue-600 text-white p-4 rounded-md" onClick={()=>handleClick()}>Host A Tournament</button>
        <Toaster />
    </div>
  )
}

export default Sponsor