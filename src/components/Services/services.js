const Services = ({heading, subHeading}) => {
  return (
    <div>
      <div>{heading}</div>
      <div>{subHeading}</div>
      <div>
        <div>
          <img src={img1} />
        </div>
        <div></div>
        <div>
          <img src={img2} />
        </div>
        <div></div>
        <div>
          <img src={img3} />
        </div>
      </div>
    </div>
  );
};

export default Services;
