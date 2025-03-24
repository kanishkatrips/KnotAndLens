import "./styles.scss";

const footer = [
  {
    title: "ABOUT US",
  },
  {
    title: "BLOGS",
  },
  {
    title: "CAREER",
  },
  {
    title: "GALLERY",
  },
  {
    title: "CONTACT US",
  },
  {
    title: "TERMS AND CONDITIONS",
  },
  {
    title: "PRIVACY POLICY",
  },
];

const Footer = () => {
  return (
    <div className="body">
      <div className="footer">
        <img src="../assets/logo2.png" width={100} height={100} />
        <div>
          {footer.map((item) => {
            return <div>{item.title}</div>;
          })}
        </div>
        <div className="socialmedia">Social Network logo</div>
      </div>
      <div className="divider"></div>
      <div className="trademark">{`@ ${new Date().getFullYear()} Knot&lens `}</div>
    </div>
  );
};

export default Footer;
