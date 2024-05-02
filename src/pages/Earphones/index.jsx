import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import { useEffect, useState } from "react";
import erarphones from "../../assets/earphones2.png";
import { Link } from "react-router-dom";

function Earphones() {
  const [yx1, setyx1] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/yx1-earphones`)
      .then((res) => res.json())
      .then((data) => {
        setyx1(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="headphones_header">
        <h2>EARPHONES</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={erarphones} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-4">{yx1?.name}</h2>
          <p className="mb-4">{yx1?.description}</p>
          <Link
            to="/earphones1"
            className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
             ADD TO CART
          </Link>
        </div>
      </div>

      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default Earphones;
