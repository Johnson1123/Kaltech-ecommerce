import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import { cart, heart, menu, search, userBlack } from "../../assets/icons";
import { searchWhite } from "../../assets/icons";

const IconGroup = ({ iconWhiteClass }) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={clsx("bottom-icons-wrapper")}>
      <div className="nav-search-wrapper d-none d-lg-block">
        <button className="" onClick={(e) => handleClick(e)}>
          <img src={search} alt="search icon" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <img src={searchWhite} alt="search icon" />
            </button>
          </form>
        </div>
      </div>
      <div className="account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          <img src={userBlack} alt="account icon" />
        </button>
        <div className="account-content">
          <ul>
            <li>
              <Link to={import.meta.env.VITE_PUBLIC_URL + "/login-register"}>
                Login
              </Link>
            </li>
            <li>
              <Link to={import.meta.env.VITE_PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li>
            <li>
              <Link to={import.meta.env.VITE_PUBLIC_URL + "/my-account"}>
                my account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wishlist-wrapper d-none d-lg-block">
        <Link to={import.meta.env.VITE_PUBLIC_URL + "/wishlist"}>
          <img src={heart} alt="wishlist icon" />
          <span className="count-style">
            {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="cart-wrapper d-none d-lg-block">
        <Link
          to={import.meta.env.VITE_PUBLIC_URL + "/cart"}
          className="icon-cart"
        >
          <img src={cart} alt="cart icon" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
        {/* menu cart */}
        {/* <MenuCart /> */}
      </div>

      <div className="menu-bars d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <img src={menu} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
