import React from "react";
import { Link } from "react-router-dom";
import { facebook, instagram, linkedin } from "../../../assets/icons";

function NavSocialMedia() {
  return (
    <div className="icon-wrapper">
      <span>
        <Link to="/">
          <img src={facebook} alt="facebook" />
        </Link>
      </span>
      <span>
        <Link to="/">
          <img src={instagram} alt="instagram" />
        </Link>
      </span>
      <span>
        <Link to="/">
          <img src={linkedin} alt="linkedin" />
        </Link>
      </span>
    </div>
  );
}

export default NavSocialMedia;
