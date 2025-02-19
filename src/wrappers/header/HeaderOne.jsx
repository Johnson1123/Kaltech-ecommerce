import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import { logo } from "../../assets/img/logo";

const HeaderOne = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass,
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={clsx("main-nav-wrapper", headerPositionClass)}>
      {/* Top nav */}
      <div
        className={clsx(
          "header-top-area",
          top === "visible" ? "d-none d-lg-block" : "d-none",
          borderStyle === "fluid-border" && "border-none"
        )}
      >
        {/* header top */}
        <HeaderTop borderStyle={borderStyle} />
      </div>

      {/* bottom Nav */}
      <div
        className={clsx(
          "sticky-bar",
          scroll > headerTop && "stick stick-padding"
        )}
      >
        <div className={"bottom-nav-wrapper"}>
          {/*  start of main navigatiowrapper*/}
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            <Logo imageUrl={logo} logoClass="nav-logo" />
          </div>
          <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            {/* Nav menu */}
            <NavMenu />
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            {/* Icon group */}
            <IconGroup />
          </div>
        </div>

        {/* mobile menu */}
        <MobileMenu />
        {/*  end of main navigatiowrapper*/}
      </div>
    </header>
  );
};

HeaderOne.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string,
};

export default HeaderOne;
