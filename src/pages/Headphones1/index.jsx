import React, { useEffect, useState } from "react";
import headphones1 from "../../assets/headphones1.png";
import FirstFotter from '../../components/firstFotter'
import Cart from '../../components/cart'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import images1 from "../../assets/images1.png";
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import "./index.css";
function Headphones1() {
  const [headphones, setHeadphones] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/xx99-mark-two-headphones`)
      .then((res) => res.json())
      .then((data) => {
        setHeadphones(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch({ type: "ADD", payload: 1 });
  }

  function decrement() {
    if (counter > 1) {
      dispatch({ type: "REMOVE", payload: 1 });
    }
  }

  function handleCard(e) {
    e.preventDefault()
    const dataBase = {
      name: headphones.name,
      price: headphones.price,
      image: headphones1
    }
    dispatch({type: 'CARD_ADD', payload: dataBase})
  }
  return (
    <>
      <div className="hero_one flex items-center jutify-between mt-[160px]">
        <div className="img">
          <Link to="/">Go Back</Link>
          <img src={headphones1} alt="" className="mt-20" />
        </div>
        <div className="descriptions w-[445px]">
          <p className="text-orange-600 line ">NEW PRODUCT</p>
          <h2 className="text-5xl mb-4">{headphones?.name}</h2>
          <p className="mb-4">{headphones?.description}</p>
          <div className="flex items-center gap-8">
            <span className="btn gap-[21px] hover:bg-[#FAFAFA]">
              <p onClick={decrement}>-</p>
              <p>{counter}</p>
              <p onClick={increment}>+</p>
            </span>
            <span onClick={handleCard} className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer">
              ADD TO CART
            </span>
          </div>
        </div>
      </div>

      <div className="descriptions flex w-[1109px]">
        <div className="desc1 w-[635px]">
          <h2 className="text-4xl font-bold mb-[32px]">FEATURES</h2>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br /> <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className="desc2 ">
          <h2 className="text-4xl font-bold mb-[32px]">IN THE BOX</h2>
          <p>
            <span className="text-orange-600 mr-3">1x</span>Headphone Unit
          </p>
          <p>
            <span className="text-orange-600 mr-3">2x</span>Replacement Earcups
          </p>
          <p>
            <span className="text-orange-600 mr-3">1x</span>User Manual
          </p>
          <p>
            <span className="text-orange-600 mr-3">1x</span>3.5mm 5m Audio Cable
          </p>
          <p>
            <span className="text-orange-600 mr-3">1x</span>Travel Bag
          </p>
        </div>
      </div>

      <div className="images mt-[160px] flex items-center w-[1109px] gap-[30px]">
        <div className="imagess">
          <img src={images1} alt="" className="mb-[32px]"/>
          <img src={images2} alt="" />
        </div>
        <img src={images3} alt="" />
      </div>

      <div className="cards_container mb-[300px]">
        <h2 className="text-4xl font-bold mb-[32px] justify-center text-center mb-[64px]">YOU MAY ALSO LIKE</h2>
        <div className="cards flex items-center jutify-between">
            <div className="cards_card w-1/3 text-center">
              <img src={card1} alt="" />
              <h3 className="mt-8 mb-8 text-2xl text-bold">XX99 MARK I</h3>
              <Link to='/headphones2' className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer">
              See Product
            </Link>
            </div>
            <div className="cards_card w-1/3 text-center">
              <img src={card2} alt="" />
              <h3 className="mt-8 mb-8 text-2xl text-bold">XX59</h3>
              <Link to='/headphones3' className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer">
              See Product
            </Link>
            </div>
            <div className="cards_card w-1/3 text-center">
              <img src={card3} alt="" />
              <h3 className="mt-8 mb-8 text-2xl text-bold">ZX9 SPEAKER</h3>
              <Link to='/speakers1' className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer">
              See Product
            </Link>
            </div>
        </div>
      </div>



      <Cart></Cart>

      <FirstFotter></FirstFotter>
    </>
  );
}

export default Headphones1;
