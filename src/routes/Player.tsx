import toast, {Toaster} from "react-hot-toast"
const Player = () => {
    const handleClick = () =>{
        toast.error('We are currently working on this feature. Please check back later')
    }

  return (
    <div className="flex flex-col w-full items-center mt-10 gap-12 h-screen">
        <h1 className="text-6xl font-extrabold text-center">Want to test your skills?</h1>
        <h2 className="text-4xl font-bold text-center">Let's Put them to the test!</h2>
        <p className="text-center text-xl text-medium">Let's get started with the tournament</p>
        <button className="bg-blue-600 text-white p-4 rounded-md" onClick={()=>handleClick()}>Participate</button>
        <Toaster />
    </div>
  )
}

export default Player