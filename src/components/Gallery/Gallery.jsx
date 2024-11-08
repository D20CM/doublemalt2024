import PhotoTile from "../PhotoTile/PhotoTile";
import css from "./gallery.module.css";
import photoCollection from "../../assets/img_library.js";

function Gallery() {
  //   let photoCollection = [];
  //   const modules = import.meta.glob("../../assets/media/posts");

  //   console.log(Object.keys(modules));

  //   for (const path in modules) {
  //     modules[path]().then((mod) => {
  //       console.log(mod);
  //       photoCollection.push(mod);
  //     });
  //   }

  return (
    <div className={css.galleryContainer} id="photos">
      <h2>
        <span>P</span>hoto <span>G</span>allery
      </h2>
      <div className={css.photogrid}>
        {photoCollection.map((item, index) => (
          <div key={index}>
            <PhotoTile url={item} className={css.phototile} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
