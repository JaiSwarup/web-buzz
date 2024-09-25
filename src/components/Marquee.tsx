import MarqueeComp from "./MarqueeItem";
import csk from '../assets/csk.png';
// import dc from '/dc.png';
import kkr from '../assets/kkr.png';
import mi from '../assets/mi.png';
import pbks from '../assets/pbks.png';
import rr from '../assets/rr.png';
import rcb from '../assets/rcb.png';
import srh from '../assets/srh.png';
import gt from '../assets/gt.png';

const Marquee = () => {
  const images = [
    csk,
    kkr,
    mi,
    pbks,
    rr,
    rcb,
    srh,
    gt
  ];


  return (
    <div className="container mx-auto my-10">
      <MarqueeComp images={images} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;