import css from "./homepage.module.css";
import dm_homepage_photo from "../../assets/images/dm_homepage_photo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Homepage() {
  return (
    <>
      <section className={css.homepageFull}>
        <div>
          <h1 className={css.duoname}>
            <div>
              <span>D</span>ouble
            </div>
            <div>
              <span>M</span>alt
            </div>
            <div>
              <span>D</span>uo
            </div>
          </h1>
          <hr></hr>
        </div>
        <ul className={css.bulletpoints}>
          <li>
            <span>
              <FontAwesomeIcon icon={faStar} className="star" />
            </span>
            Exceptional acoustic duo featuring 2 guitars, lead vocals and
            backing vocals
          </li>
          <li>
            {" "}
            <FontAwesomeIcon icon={faStar} className="star" />
            Piano and Saxophone available as alternative instruments
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} className="star" />
            Over a decade of professional experience
          </li>
        </ul>
        <p className={css.blurb}>
          Established under particularly unique circumstances, the Double Malt
          Duo has developed an equally unique and intriguing musical experience.
          The duo’s smoky and soulful vocals coupled with their beautifully
          expressive guitar playing lay the foundation for the pair’s inimitable
          sound. The occasional switch to piano and/or saxophone colours their
          sound with a touch of class that sets them apart. Current and former
          clients include Crystal, Cunard, Seabourn Cruises, Hilton Hotels,
          Windstar Cruises, TUI (Thompson) Hotels, DFDS Seaways, and Brittany
          Ferries.
        </p>

        <img src={dm_homepage_photo} className={css.dm_homepage_photo} />
      </section>
    </>
  );
}

export default Homepage;
