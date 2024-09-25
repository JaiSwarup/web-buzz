import { motion } from 'framer-motion';
import csk from '../assets/csk.png';
// import dc from '/dc.png';
import kkr from '../assets/kkr.png';
import mi from '../assets/mi.png';
import pbks from '../assets/pbks.png';
import rr from '../assets/rr.png';
import rcb from '../assets/rcb.png';
import srh from '../assets/srh.png';
import gt from '../assets/gt.png';


const gridVariants = {
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      staggerChildren: 0.1 
    } 
  },
};

const itemVariants = {
  hidden: (custom: {x:number, y:number}) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

let teams = [
    csk, kkr, mi, pbks, rr, rcb, srh, gt
];
let initialPos = []
for (let i = 0; i < 8; i++){
    var plusOrMinus = () => Math.random() < 0.5 ? -1 : 1;
    initialPos.push({
        x: plusOrMinus() * Math.random() * 200,
        y: plusOrMinus() * Math.random() * 200,
    });
}


const Grid = () => {
  return (
    <motion.div
      className="grid grid-cols-4 gap-4 px-4 py-10 w-full items-center overflow-hidden bg-gray-50 mix-blend-overlay"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {initialPos.map((pos, i) => (
        <motion.div
          key={i}
          className="h-36 flex items-center justify-center"
          custom={pos}
          transition={{duration: 2, delay: 1}}
          variants={itemVariants}
        >
          <img src={teams[i]} alt="team" className="h-24"/>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Grid;
