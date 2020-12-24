import loader from "../img/loader.gif";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img className="loader-image" src={loader} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
