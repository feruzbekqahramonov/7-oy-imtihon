import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import { useEffect, useState } from "react";
import headphones1 from "../../assets/headphones1.png";
import headphones2 from "../../assets/headphones2.png";
import headphones3 from "../../assets/headphones3.png";
import { Link } from "react-router-dom";
function Headphones() {
  const [headphones, setHeadphones] = useState([]);
  const [headphonestwoo, setheadphones2] = useState([]);
  const [xx59, setxx59] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/xx99-mark-two-headphones`)
      .then((res) => res.json())
      .then((data) => {
        setHeadphones(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:3000/xx99-mark-one-headphones`)
      .then((res) => res.json())
      .then((data) => {
        setheadphones2(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:3000/xx59-headphones`)
      .then((res) => res.json())
      .then((data) => {
        setxx59(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="headphones_header">
        <h2>HEADPHONES</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={headphones1} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-4">{headphones?.name}</h2>
          <p className="mb-4">{headphones?.description}</p>
          <Link to="/headphones1" className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]">See Product</Link>
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-4">{headphonestwoo?.name}</h2>
          <p className="mb-4">{headphonestwoo?.description}</p>
          <Link to="/headphones2" className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]">See Product</Link>
        </div>
        <div className="img">
          <img src={headphones2} alt="" />
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px] mb-8">
        <div className="img">
          <img src={headphones3} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-4">{xx59?.name}</h2>
          <p className="mb-4">{xx59?.description}</p>
          <Link to="/headphones3" className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]">See Product</Link>
        </div>
      </div>
      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default Headphones;
