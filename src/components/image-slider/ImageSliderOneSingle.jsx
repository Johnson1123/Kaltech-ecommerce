import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageSliderOneSingle = ({ data }) => {
  return (
    <div className="single-image">
      <Link to={import.meta.env.VITE_PUBLIC_URLL + data.link}>
        <img src={import.meta.env.VITE_PUBLIC_URLL + data.image} alt="" />
      </Link>
    </div>
  );
};

ImageSliderOneSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default ImageSliderOneSingle;
