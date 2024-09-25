import { useParams } from 'react-router-dom'
import SpinningLogo from '../components/SpinningLogo'
import img from '../assets/cricket-resized.webp'
import csk from '../assets/csk.png'
import mi from '../assets/mi.png'

const Tournament = () => {
    const params = useParams<{id: string}>()
    console.log(params)
    return (
        <>
        <div className="w-full flex flex-col relative my-0">
          <img 
            src={img} 
            alt="idk" 
            className="w-full object-cover h-[30rem]" 
          />
            <div 
              className="z-10 absolute p-4 w-full">
                <h1 className="text-6xl text-center text-white font-bold">
                  Tourney {params.id}
                </h1>
                <div className='flex justify-between px-10'>
                    <div>
                        <SpinningLogo image={csk} />
                        <h1 className="text-4xl text-white font-bold text-center"> Team A</h1>
                    </div>
                    <div>
                        <SpinningLogo image={mi} />
                        <h1 className="text-4xl text-white font-bold text-center"> Team A</h1>
                    </div>
                </div>
            </div>
            <div 
              className="absolute inset-0 bg-gray-900/70" 
            />
        </div>
    </>
  )
}

export default Tournament