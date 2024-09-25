import { motion } from "framer-motion";

type MarqueeItemProps = {
  images: string[];
  from: string | number;
  to: string | number;
};

const MarqueeComp = ({ images, from, to }: MarqueeItemProps) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      {/* First set of images */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }} // Increased duration for smooth scrolling
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img className="h-40 w-56 pr-20" src={image} key={`first-${index}`} />
        ))}
      </motion.div>

      {/* Second set of images for continuous loop */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }} // Matches the first motion block
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img className="h-40 w-56 pr-20" src={image} key={`second-${index}`} />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeComp;
