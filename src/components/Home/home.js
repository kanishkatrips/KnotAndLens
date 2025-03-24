import Achievements from "../Achievements/achievements";
import "./styles.scss";
import Services from "../Services/services";

const services = [
  { heading: "Our Services" },
  {
    subHeading:
      "You nae it, We have it! Indian & International Wedding locations",
  },
  { img1: "", img2: "", img3: "" },
];

const Home = () => {
  return (
    <div className="banner-container">
      <div className="home-container">
        <div className="banner">
          <img src="/assets/banner.jpg" />
        </div>
        <div className="logo">
          <img src="/assets/logo.jpg" width={120} height={120} />
        </div>
      </div>
      <Achievements />
      <div>
        <div className="about">About Us</div>
        <div className="aboutContent">
          <div>
            <span className="content">
              Welcome to Knots & Lens - Where Your Love Story Comes To Life
            </span>
            <div className="mainContent">
              At Knots & lens, we specialize in crafting unforgettable weddings
              and beautifully capture your love and commitment. From elegant
              decor and seamless planning to breathtaking photography and
              videography, we ensure that every moment is perfectly captured and
              preserved. Whether you dream of an intimate ceremony or a grand
              celebration, our expert team brings creativity, precision, and
              passion to every detail. Let us handle the planning while you
              focus on making memories. With Knots & Lens, your wedding will be
              as flawless as your love story.
            </div>
            <span className="content">
              Let's create magic together - contact us today!
            </span>
          </div>
          <div>
            <img src="/assets/logo.jpg" width={280} height={280} />
          </div>
        </div>
      </div>
      <Services heading={heading} subHeading={subHeading}/>
    </div>
  );
};

export default Home;
