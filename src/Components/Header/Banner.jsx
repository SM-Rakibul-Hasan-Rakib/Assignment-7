import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    
    <div className="bg-[url(../src/assets/images/banner.png)]">
      <div
        className="hero lg:h-[500px] rounded-2xl "
        
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5  text-3xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <button className="btn bg-green-400 text-black   font-bold rounded-3xl hover:bg-green-400 outline-none ">
              Explore Now
            </button>
            <button className="btn btn-outline ml-4 btn-secondary rounded-3xl">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;