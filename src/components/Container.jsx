import CloseIcon from "@material-ui/icons/Close";
import "./container.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Container() {
  return (
    <div className="container">
      <div className="container__header">
        <div className="container__title">
          <img
            src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
            alt=""
          />
          <h1>Customize "Tandoori Tofu Sub (15cm, 6 Inch)"</h1>
          <div className="container__titleIcon">
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className="container__price">
        <h2>Rs 205</h2>
      </div>
      <div className="container__nav">
        <div className="container__navLine1">
          <h6 className="active">Choice of Bread</h6>
          <h6>Choice of Preparation</h6>
          <h6>Add On</h6>
          <h6>Choice of Beverages</h6>
        </div>
      </div>
      <Menu />
      <Footer />
    </div>
  );
}

export default Container;
