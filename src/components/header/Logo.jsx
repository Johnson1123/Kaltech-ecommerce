import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <Link to={import.meta.env.VITE_PUBLIC_URL + "/"} className={logoClass}>
      <img alt="" src={imageUrl} />
    </Link>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string,
};

export default Logo;
