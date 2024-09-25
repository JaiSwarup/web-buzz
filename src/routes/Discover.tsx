import { useState } from 'react'
import bat from '../assets/cricket-resized.webp'
import { motion, AnimatePresence } from 'framer-motion'
import TournamentCard from '../components/TournamentCard'

type Props = {}

export default function Discover({}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [tournamentVisible, setTournamentVisible] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <AnimatePresence>
        <div className="w-full flex flex-col relative my-0">
          <img 
            src={bat} 
            alt="idk" 
            className="w-full object-cover h-[40rem]" 
            onLoad={handleImageLoad} // handle image load
          />
          {imageLoaded && ( // Render content after image has loaded
            <>
              <motion.div 
                className="z-10 absolute right-0 m-auto h-fit top-0 bottom-0 p-4" 
                initial={{ opacity: 0, x: "-100%" }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 1, duration: 1 }}>
                <div className="relative flex flex-col gap-8 text-white">
                  <h1 className="text-6xl font-bold">
                    Years of Experience
                  </h1>
                  <h1 className="text-6xl font-bold">
                    Years of Excellence
                  </h1>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-gray-900/50" 
                transition={{ duration: 1 }} 
              />
            </>
          )}
        </div>
      </AnimatePresence>
      {imageLoaded && ( // Delay the animation of the text content too
        <motion.div className="p-4 mb-10 flex flex-col gap-4">
          <motion.h2 
            className="text-4xl font-bold text-center my-2"
            initial={{ y: 50, opacity: 0 }} 
            animate={tournamentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            onViewportEnter={() => setTournamentVisible(true)} // Trigger the tournament cards animation on entering the viewport
          >
            Tournaments hosted by us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1,2,3].map((id, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                animate={tournamentVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 * index, duration: 0.8 }} // Staggered animation for each card
              >
                <TournamentCard 
                  id={id} 
                  name={`Tourney ${id}`} 
                  description={id % 2 == 0 ? "Rajasthan takes on Kolkata" : "Chennai emerges as the champion"} 
                  status={id % 2 == 0 ? 'live' : 'completed'} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
