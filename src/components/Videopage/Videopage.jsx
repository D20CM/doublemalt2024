import css from "./videopage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Videopage() {
  return (
    <section className={css.videopage}>
      <hr></hr>
      <div className={css.acoustic}>
        <div className={css.acousticvideo}>
          <iframe
            src="https://www.youtube.com/embed/d6ErXccuLM0?si=H8_qX9er4C6XwzNF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={css.acousticdescription}>
          <h2>
            <span>A</span>coustic
          </h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faStar} className="star" />
              Two Acoustic Guitars, plus backing vocals
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="star" />
              Acoustic covers of popular classics
            </li>
          </ul>
          <p>
            The Double Malt Duo play music to suit a variety of tastes. They
            lend their distinctive sound to many genres including pop, rock,
            country, soul, folk, and the odd jazz standard. A typical (but
            seldom ordinary) evening encompasses covers from classic artists,
            such as the Beatles, Fleetwood Mac, Eva Cassidy, Cat Stevens, the
            Eagles, Carole King, and Bob Marley. A more mellow evening might
            include hits from Norah Jones, Katie Melua, Ed Sheeran, and Nina
            Simone, followed by a light saxophone or piano instrumental. With a
            repertoire of several hundred songs, Double Malt is sure to delight
            even the most discerning music lover.
          </p>
        </div>
      </div>
      <hr></hr>

      <div className={css.electric}>
        <div className={css.electricvideo}>
          <iframe
            src="https://www.youtube.com/embed/ghyOTz2i3oQ?si=VMKASp6ZPH5rVYAR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={css.electricdescription}>
          <h2>
            <span>E</span>lectric
          </h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faStar} className="star" />
              High quality backing tracks for high energy performances
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="star" />
              Electric guitar and Saxophone
            </li>
          </ul>
          <p>
            For a livelier atmosphere, the Double Malt Duo brings the party!
            With the simple switch from acoustic to electric guitar and the
            addition of high-quality custom backing tracks, they are sure to get
            people on their feet! They have sets of 80s floor-fillers, including
            songs by Whitney Houston, Lionel Richie, Chaka Khan, and George
            Michael. If a bit of classic rock and roll is more fitting for your
            event, they also have hits from artists such as Elvis, Chubby
            Checker, Frankie Valli, and Chuck Berry. They are also up to date on
            current chart-toppers for a more modern crowd. Just ask! The Double
            Malt Duo is happy to tailor their sets to suit any event, whatever
            the vibe may be!
          </p>
        </div>
      </div>
      <hr></hr>
    </section>
  );
}

export default Videopage;
