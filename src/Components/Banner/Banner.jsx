import { Link } from "react-router-dom";
import bannerImg from "../../assets/BannerImg.png"

const Banner = () => {
  return (
    <div>
      <div className="hero rounded-md bg-gradient-to-r from-blue-800 to-blue-900 ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img
            src={bannerImg}
            className="md:max-w-lg"
          />
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">The best Task Management tools</h1>
            <p className="py-6">
            Streamline Your Tasks with Ease! Our task management website offers seamless organization, collaboration, and efficiency. Simplify your workflow today!
            </p>
            <Link to="/dashboard" className="btn btn-primary rounded-md">Let’s Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
