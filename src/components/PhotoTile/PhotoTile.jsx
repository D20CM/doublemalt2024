import css from "./phototile.module.css";
function PhotoTile({ url }) {
  // console.log("In tile component: url is ", url);

  return (
    <div className={css.phototile}>
      <img src={url}></img>
    </div>
  );
}

export default PhotoTile;
