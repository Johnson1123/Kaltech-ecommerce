import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerTwoSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
        <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
      </Link>
    </div>
  );
};

BannerTwoSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerTwoSingle;
