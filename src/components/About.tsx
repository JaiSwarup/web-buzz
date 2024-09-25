import Marquee from "./Marquee"

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex gap-28 my-10">
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold text-center">
                    <span>8</span>
                    <span>K</span>
                    <span>+</span>
                </h1>
                <p className="text-xl">Matches Played</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold text-center">
                    <span>8</span>
                    <span>T</span>
                    <span>+</span>
                </h1>
                <p className="text-xl">Matches Played</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-7xl font-bold text-center">
                    <span>8</span>
                    <span>T</span>
                    <span>+</span>
                </h1>
                <p className="text-xl">Matches Played</p>
            </div>
        </div>
        <Marquee />
    </div>
  )
}