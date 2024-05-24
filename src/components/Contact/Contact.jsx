import React from "react";
import css from "./contact.module.css";
import dm_contact_photo from "../../assets/images/dm_contact_photo.jpg";

function Contact() {
  return (
    <section className={css.contact}>
      <div className={css.contactinfo}>
        <h2>
          <span>C</span>ontact
        </h2>
        <p>
          Please get in touch at info@doublemaltduo.com or 07974 201346 (UK
          mobile) We’re also on social media here;
        </p>
        <p>
          And if you’d like to buy us a drink, you can scan the QR code below or
          click the tips jar button in the menu – cheers!
        </p>
      </div>
      <div className={css.contactimage}>
        <img src={dm_contact_photo}></img>
      </div>
    </section>
  );
}

export default Contact;
