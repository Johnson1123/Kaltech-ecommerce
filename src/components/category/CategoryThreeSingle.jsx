import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryThreeSingle = ({ data }) => {
  return (
    <div className="collection-product">
      <div className="collection-img">
        <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>
          <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
      <div className="collection-content text-center">
        <span>{data.subtitle}</span>
        <h4>
          <Link to={import.meta.env.VITE_PUBLIC_URL + data.link}>{data.title}</Link>
        </h4>
        <Link
          to={import.meta.env.VITE_PUBLIC_URL + data.link}
          className="collection-btn"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

CategoryThreeSingle.propTypes = {
  data: PropTypes.shape({})
};

export default CategoryThreeSingle;
