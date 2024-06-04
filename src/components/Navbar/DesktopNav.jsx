import NavLinks from "./NavLinks";
import css from "./desktopnav.module.css";

function DesktopNav() {
  return (
    <nav className={css.DesktopNav}>
      <NavLinks />
    </nav>
  );
}

export default DesktopNav;
