import React from "react";
import kathleensolo from "../../assets/images/kathleensolo.jpg";
import scottsolo from "../../assets/images/scottsolo.jpg";
import css from "./about.module.css";

function About() {
  return (
    <>
      <section className={css.about}>
        <div>
          <h2>
            <span>A</span>bout Us
          </h2>
          <p>
            Double Malt first came together while Scott and Kathleen were
            touring together in a circus orchestra – Kathleen playing saxophone
            and singing, Scott playing guitar and trombone. Discovering a common
            love of acoustic pop and folk music, they began sharing their
            favourite songs and harmonising vocals, sketching out arrangements
            that became the backbone of their style today. With the addition of
            the latest pop covers and some old favourites the duo blossomed into
            an entertainment experience too good to be confined to a circus
            caravan and Double Malt was born!
          </p>
          <p>
            With Kathleen’s experience of entertaining both the corporate
            function world and the livelier crowds in the pubs and clubs of the
            UK and Asia, and Scott’s experience of entertaining the crowds on
            board cruise ships with HAL and Princess Cruises, you can be sure
            that your entertainment needs are in safe hands. Their attention to
            detail and professionalism is as you would expect from two graduates
            of highly acclaimed music schools in the UK, and their slick
            presentation married with a natural charm helps them warm up an
            evening in any setting.
          </p>
        </div>
        <div className={css.headshots}>
          <img src={scottsolo}></img>
          <img src={kathleensolo}></img>
        </div>
        <hr></hr>
      </section>
    </>
  );
}

export default About;
