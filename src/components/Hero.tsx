import Grid from "./Grid"
import {motion} from "framer-motion"

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="w-full flex flex-col relative my-0 h-full">
        <motion.div className="z-10 absolute left-0 right-0 m-auto w-fit h-fit top-0 bottom-0 p-4" animate={{opacity:1}} initial={{opacity:0}} transition={{delay:3, duration:2}}>
            <div className="relative">
                <div className="-inset-8 absolute bg-white/60 blur rounded-full transition-all"></div>
                <div className="relative p-4">
                    <h1 className="text-7xl font-bold">
                        CricWic
                    </h1>
                </div>
            </div>
        </motion.div>
        <Grid />
    </div>
  )
}