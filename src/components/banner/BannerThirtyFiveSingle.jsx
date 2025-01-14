import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerThirtyFiveSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-banner", spaceBottomClass)}>
      <Link to={import.meta.env.VITE_PUBLIC_URL + data.url}>
        <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
      </Link>
      <div className="banner-content-5">
        <span>{data.title}</span>
        <h3>{data.subtitle}</h3>
        <Link to={import.meta.env.VITE_PUBLIC_URL + data.url}>
          <i className="fa fa-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

BannerThirtyFiveSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
};

export default BannerThirtyFiveSingle;
