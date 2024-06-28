import css from "./contact.module.css";
import dm_contact_photo from "../../assets/images/dm_contact_photo.jpg";
import bmc_qr_doublemaltduo from "../../assets/images/bmc_qr_doublemaltduo_tipjar.png";
function Contact() {
  return (
    <section className={css.contact} id="contact">
      <div className={css.contactinfo}>
        <h2>
          <span>C</span>ontact
        </h2>
        <p>
          Please get in touch at <br></br>
          <a href="mailto:info@doublemaltduo.com">
            info@doublemaltduo.com
          </a>{" "}
          <br></br> or 07974 201346 (UK mobile) <br></br>We’re also on social
          media here;
        </p>
        <p className={css.socials}>
          <a
            id="facebook-share"
            href="https://www.facebook.com/Doublemaltacousticduo"
            alt="Double Malt Duo on Facebook"
          >
            <i
              className="fab large-social fa-facebook-square"
              data-toggle="tooltip"
              title="Facebook"
            ></i>
          </a>

          <a
            id="insta"
            href="https://www.instagram.com/doublemaltduo/"
            alt="Double Malt Duo on Instagram"
          >
            <i
              className="fab large-social fa-instagram-square"
              data-toggle="tooltip"
              title="Instagram"
            ></i>
          </a>
          <a
            id="youtube"
            href="https://www.youtube.com/@doublemalt"
            alt="Double Malt Duo on YouTube"
          >
            <i
              className="fab large-social fa-youtube-square"
              data-toggle="tooltip"
              title="Youtube"
            ></i>
          </a>
        </p>
        <p>
          And if you’d like to buy us a drink, you can scan the QR code below or
          click the tips jar button in the menu – cheers!
        </p>
        <img src={bmc_qr_doublemaltduo} className={css.qrcode}></img>
      </div>
      <img src={dm_contact_photo} className={css.contactimage}></img>
    </section>
  );
}

export default Contact;
