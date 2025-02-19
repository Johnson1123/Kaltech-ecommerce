import PropTypes from "prop-types";
import clsx from "clsx";

const BrandLogoOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className={clsx("single-brand-logo", spaceBottomClass)}>
      <img src={import.meta.env.VITE_PUBLIC_URL + data.image} alt="" />
    </div>
  );
};

BrandLogoOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BrandLogoOneSingle;
