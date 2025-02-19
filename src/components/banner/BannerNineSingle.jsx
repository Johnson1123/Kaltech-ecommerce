import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerNineSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner-2", spaceBottomClass)}>
      <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
        <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content-2">
        <h3>{data.title}</h3>
        <h4>
          {data.subtitle} <span>{data.price}</span>
        </h4>
        <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerNineSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerNineSingle;
