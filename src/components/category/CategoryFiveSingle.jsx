import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryFiveSingle = ({ data }) => {
  return (
      <div className="category-grid">
        <div className="category-grid__image">
          <Link to={import.meta.env.VITE_PUBLIC_URL + data.url}>
            <img
              src={import.meta.env.VITE_PUBLIC_URL + data.image}
              alt=""
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="category-grid__content">
          <Link to={import.meta.env.VITE_PUBLIC_URL + data.url}>{data.title}</Link>
        </div>
      </div>
  );
};

CategoryFiveSingle.propTypes = {
  data: PropTypes.shape({})
};

export default CategoryFiveSingle;
