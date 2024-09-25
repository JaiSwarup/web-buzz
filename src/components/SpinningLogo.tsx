import { motion } from 'framer-motion';

type Props = {
  image: string;
};

const SpinningLogo = ({image}:Props) => {
  return (
    <motion.img
      src={image}
      alt="Logo"
      animate={{ rotateY: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default SpinningLogo;
