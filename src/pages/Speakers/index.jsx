import "./index.css";
import FirstFotter from "../../components/firstFotter";
import Cart from "../../components/cart";
import { useEffect, useState } from "react";
import spaeaker1 from "../../assets/speakers1.png";
import spaeaker2 from "../../assets/speakers2.png";
import { Link } from "react-router-dom";
function speakers() {
  const [zx7, setzx7] = useState([]);
  const [zx9, setzx9] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/zx9-speaker`)
      .then((res) => res.json())
      .then((data) => {
        setzx9(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(`http://localhost:3000/zx7-speaker`)
      .then((res) => res.json())
      .then((data) => {
        setzx7(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="headphones_header">
        <h2>SPEAKERS</h2>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <img src={spaeaker1} alt="" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-4">{zx9?.name}</h2>
          <p className="mb-4">{zx9?.description}</p>
          <Link
            to="/speakers1"
            className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
      </div>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="descriptions w-[445px]">
          <h2 className="text-5xl mb-4">{zx7?.name}</h2>
          <p className="mb-4">{zx7?.description}</p>
          <Link
            to="/speakers2"
            className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85]"
          >
            See Product
          </Link>
        </div>
        <div className="img">
          <img src={spaeaker2} alt="" />
        </div>
      </div>

      <Cart></Cart>
      <FirstFotter></FirstFotter>
    </>
  );
}

export default speakers;
