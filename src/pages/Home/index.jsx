import { useEffect, useState } from "react";
import bitmap from "../../assets/bitmap.png";
import "./index.css";
import { NavLink } from "react-router-dom";
import Cart from '../../components/cart'
import zx9b from '../../assets/zxpspeakers.png'
import YX1 from '../../assets/YX1.png'
import FirstFotter from '../../components/firstFotter'
function Home() {
  const [headphones, setHeadphones] = useState([]);
  const [speaker, setspeaker] = useState([]);
  const [speaker2, setspeaker2] = useState([]);
  const [earphones, setEarphones] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/xx99-mark-two-headphones`)
      .then((res) => res.json())
      .then((data) => {
        setHeadphones(data);
      })
      .catch((err) => {
        console.log(err);
      });

      fetch(`http://localhost:3000/zx9-speaker`)
      .then((res) => res.json())
      .then((data) => {
        setspeaker(data);
      })
      .catch((err) => {
        console.log(err);
      });

      
      fetch(`http://localhost:3000/zx7-speaker`)
      .then((res) => res.json())
      .then((data) => {
        setspeaker2(data);
      })
      .catch((err) => {
        console.log(err);
      });

      fetch(`http://localhost:3000/yx1-earphones`)
      .then((res) => res.json())
      .then((data) => {
        setEarphones(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (
    <>
      <div className="home pb-[50px]">
        <div className="home_container flex items-center justify-between">
          <div className="home_description">
            <p className="text-base-300 mb-4">NEW PRODUCT</p>
            <h2 className="text-white text-5xl mb-4">{headphones?.name}</h2>
            <p className="text-base-300 mb-8">{headphones?.description}</p>
            <NavLink to='/headphones1' className=' bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]'>SEE PRODUCT</NavLink>
          </div>
          <div className="home_img ">
            <img src={bitmap} alt="" />
          </div>
        </div>
      </div>
      <Cart></Cart>

      <div className='medium'>
        <div className='medium_img'>
          <img src={zx9b} alt="" />
        </div>
        <div className='medium_title'>
          <h2>{speaker?.name}</h2>
          <p>{speaker?.description}</p>
          <NavLink to='/speakers1'  className='button'>See Product</NavLink>
        </div>
      </div>

      <div className='mask'>
        <h1>{speaker2?.name}</h1>
        <NavLink to='/speakers2' className='button2'>See Product</NavLink>
      </div>

      <div className='earphones'>
        <div className='earphones_img'>
          <img src={YX1} alt="" />
        </div>
        <div className='earphones_title'>
          <h1>{earphones?.name}</h1>
          <NavLink to='/earphones1' className='button3'>See Product</NavLink>
        </div>
      </div>

      <FirstFotter></FirstFotter>
    </>
  );
}

export default Home;
