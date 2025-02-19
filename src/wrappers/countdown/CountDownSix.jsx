import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/countdown";

const CountDownSix = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <CountdownTimer date={dateTime} />
              </div>
              <div className="funfact-btn funfact-btn-red btn-hover">
                <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={import.meta.env.VITE_PUBLIC_URL + countDownImage}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-png-2">
        <img
          src={import.meta.env.VITE_PUBLIC_URL + "/assets/img/bg/shape-2.png"}
          alt=""
        />
      </div>
    </div>
  );
};

CountDownSix.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownSix;
