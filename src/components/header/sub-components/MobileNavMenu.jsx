import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop"}>
            {t("shop")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/shop"}>
            {t("collection")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/"}>{t("About")}</Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/account"}>
            {t("Profile")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/login-register"}>
            {t("Login")}
          </Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/about"}>
            {t("about_us")}
          </Link>
        </li>

        <li>
          <Link to={import.meta.env.VITE_PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
