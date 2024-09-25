import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

type Props = {
    name: string
    description: string
    status: string
    id: number
}



const TournamentCard = (props: Props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/tournament/${props.id}`)
    }
  return (
    <div className="bg-gray-200 p-4 relative w-full h-60 flex flex-col justify-between shadow-lg shadow-gray-500">
        <span className={clsx(`w-5 h-5 rounded-full absolute top-0 right-0 p-2 m-3`,
            props.status == "completed" ? "bg-blue-600" : "bg-red-600 outline-red-600 outline outline-offset-4")} title={props.status}></span>
        <h1 className='font-bold text-2xl'>
            {props.name}
        </h1>
        <p>
            {props.description}
        </p>
        <div className="flex justify-end">
            <button onClick={()=>handleClick()} className='flex align-end p-2 rounded-md bg-blue-600 text-white'>Checkout</button>
        </div>
    </div>
  )
}

export default TournamentCard