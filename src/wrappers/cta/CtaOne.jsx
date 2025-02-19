import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const CtaOne = ({ spaceTopClass, backgroundImage }) => {
  return (
    <div className={clsx("save-money-area", spaceTopClass)}>
      <div className="container">
        <div
          className="bg-img pt-100 pb-100"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_PUBLIC_URL + backgroundImage})`
          }}
        >
          <div className="save-money-content">
            <h2>Shop and save money</h2>
            <div className="save-money-btn">
              <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}>
                Buy $97.09
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaOne.propTypes = {
  backgroundImage: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CtaOne;
