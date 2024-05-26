import React from "react";
import css from "./homepage.module.css";
import dm_homepage_photo from "../../assets/images/dm_homepage_photo.jpg";
import Navbar from "../Navbar/Navbar";

function Homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <section className={css.homepageFull}>
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

        <ul className={css.bulletpoints}>
          <li>
            Exceptional acoustic duo featuring 2 guitars, lead vocals and
            backing vocals
          </li>
          <li>Piano and Saxophone available as alternative instruments</li>
          <li>Over a decade of professional experience</li>
        </ul>
        <p className={css.blurb}>
          Established under particularly unique circumstances, the Double Malt
          Duo has developed an equally unique and intriguing musical
          experience.  The duo’s smoky and soulful vocals coupled with their
          beautifully expressive guitar playing lay the foundation for the
          pair’s inimitable sound. The occasional switch to piano and/or
          saxophone colours their sound with a touch of class that sets them
          apart. Current and former clients include Crystal, Cunard, Seabourn
          Cruises, Hilton Hotels, Windstar Cruises, TUI (Thompson) Hotels, DFDS
          Seaways, and Brittany Ferries.
        </p>

        <img src={dm_homepage_photo} className={css.dm_homepage_photo} />
      </section>
    </>
  );
}

export default Homepage;
