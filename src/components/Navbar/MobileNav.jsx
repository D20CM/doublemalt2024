import { useState } from "react";
import NavLinks from "./NavLinks";
import css from "./mobilenav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={css.MobileNav}>
      {!isOpen && (
        <FontAwesomeIcon
          icon={faBars}
          className={css.burger}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <FontAwesomeIcon
          icon={faXmark}
          className={css.close}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {isOpen && <NavLinks />}
    </nav>
  );
}

export default MobileNav;
