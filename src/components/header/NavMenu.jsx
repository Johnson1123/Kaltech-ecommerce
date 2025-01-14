import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavMenu = ({}) => {
  const { t } = useTranslation();
  return (
    <nav className="nav-menu-wrapper">
      <ul>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/"}>{t("Home")}</Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop"}>
            {" "}
            {t("Shop")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop"}>
            {t("Collection")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/service"}>
            {t("Service")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/blog"}>
            {t("Blog")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/contact"}>
            {t("Contact Us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
