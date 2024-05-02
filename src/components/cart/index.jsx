import { Link } from "react-router-dom";
import headphon from "../../assets/headphon.png";
import speaker from "../../assets/speaker.png";
import earphone from "../../assets/earphone.png";
import strelka from "../../assets/strelka.svg";
import "./index.css";

function Cart() {
  return (
    <div className="cart_wrapper mt-[180px]">
      <div className="carts">
        <div className="cart">
          <img className="img" src={headphon} alt="" />
          <h3>HEADPHONES</h3>
          <div className="shop flex justify-center">
            <Link className="cart_link" to="/headphones2">
              SHOP
            </Link>
            <img src={strelka} alt="" />
          </div>
        </div>
        <div className="cart">
          <img className="img" src={speaker} alt="" />
          <h3>SPEAKERS</h3>
          <div className="shop flex justify-center">
            <Link className="cart_link" to="/speakers1">
              SHOP
            </Link>
            <img src={strelka} alt="" />
          </div>
        </div>
        <div className="cart">
          <img className="img" src={earphone} alt="" />
          <h3>EARPHONES</h3>
          <div className="shop flex justify-center">
            <Link className="cart_link" to="/earphones1">
              SHOP
            </Link>
            <img src={strelka} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
