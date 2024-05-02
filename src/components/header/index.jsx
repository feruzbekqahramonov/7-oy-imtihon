import { Link, NavLink } from "react-router-dom";
import siteLogo from "../../assets/sitelogo.svg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
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
  function handleRemove() {
    dispatch({ type: "CARD_DELETE" });
  }

  const selector = useSelector((state) => state.cards.cards);
  return (
    <>
      <div className="header">
        <div className="header_container flex items-center justify-between">
          <div className="logotip">
            <NavLink to="/">
              <img src={siteLogo} alt="" />
            </NavLink>
          </div>
          <div className="pages_links">
            <NavLink className="pages_url" to="/">
              HOME
            </NavLink>
            <NavLink className="pages_url" to="/headphones">
              HEADPHONES
            </NavLink>
            <NavLink className="pages_url" to="/speakers">
              SPEAKERS
            </NavLink>
            <NavLink className="pages_url" to="/earphones">
              EARPHONES
            </NavLink>
          </div>
          <div className="buy">
            <span
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <div className="indicator">
                <HiOutlineShoppingCart className="cursor-pointer text-white w-[25px] h-[25px]" />
                <span className="badge badge-sm indicator-item">
                  {selector.length}
                </span>
              </div>
            </span>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <div className="title flex items-cennter justify-between">
                  <h3 className="font-bold text-lg">
                    CART ({selector.length})
                  </h3>
                  <p
                    onClick={handleRemove}
                    className="text-[gray] underline cursor-pointer"
                  >
                    Remove all
                  </p>
                </div>
                <div className="cards_cont mt-[32px]">
                  {selector.map((card, index) => {
                    return (
                      <div
                        className="cardd flex items-center py-7px justify-between mb-[24px]"
                        key={index}
                      >
                        <div className="first flex items-center">
                          <img
                            src={card.image}
                            alt=""
                            className="w-[64px] h-[64px] mr-[16px]"
                          />
                          <div className="card_title w-[200px] mr-[61px]">
                            <h4 className="font-bold">{card.name}</h4>
                            <p className="text-base-400">${card.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 ">
                          <span className="btn gap-[21px] hover:bg-[#FAFAFA]">
                            <p className="font-bold" onClick={decrement}>
                              -
                            </p>
                            <p>{counter}</p>
                            <p className="font-bold" onClick={increment}>
                              +
                            </p>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="card_title flex items-center py-7px justify-between">
                  <h3 className="text-lg text-[gray]">TOTAL</h3>
                  <p className="text-base-400">$ 5,396</p>
                </div>
                <Link
                  to="/checkout"
                  className="bg-orange-600 p-3 text-base-300 hover:bg-[#FBAF85] cursor-pointer w-[465px] mt-[24px] btn btn-warning"
                >
                  CHECKOUT
                </Link>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
