import "./styles.scss";
const about = [
  {
    logo: "../../assets/happyCustomers.png",
    value: "250+",
    name: "Happy Customers",
  },
  {
    logo: "../../assets/experience.png",
    value: "10+",
    name: "Years of Experience",
  },
  {
    logo: "../../assets/DestinationCovered.png",
    value: "250+",
    name: "Destinations Covered",
  },
  {
    logo: "../../assets/weddingsCovered.png",
    value: "100+",
    name: "Weddings Covered",
  },
];

const Achievements = () => {
  return (
    <div className="section">
      {about.map((item) => {
        return (
          <div className="section1">
            <div className="icons">
              <img src={item.logo} width={40} height={40}/>
            </div>
            <div>
              <div className="value">{item.value}</div>
              <div className="name">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
