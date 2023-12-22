import { Link } from "react-router-dom";
import bannerImg from "../../assets/BannerImg.png"

const Banner = () => {
  return (
    <div>
      <div className="hero rounded-md">
      <div className="hero-overlay rounded-md bg-gradient-to-r from-blue-800 to-blue-900 bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">The best Task Management tools</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/dashboard" className="btn btn-primary rounded-md">Let’s Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
