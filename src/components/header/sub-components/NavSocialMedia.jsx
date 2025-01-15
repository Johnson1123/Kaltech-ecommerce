import React from "react";
import { Link } from "react-router-dom";
import {
  facebookFilled,
  instagramFilled,
  linkedinFilled,
} from "../../../assets/icons";

function NavSocialMedia() {
  return (
    <div className="icon-wrapper">
      <span>
        <Link to="/">
          <img src={facebookFilled} alt="facebook" />
        </Link>
      </span>
      <span>
        <Link to="/">
          <img src={instagramFilled} alt="instagram" />
        </Link>
      </span>
      <span>
        <Link to="/">
          <img src={linkedinFilled} alt="linkedin" />
        </Link>
      </span>
    </div>
  );
}

export default NavSocialMedia;
