import "./styles.scss"
const about = [
  {
    logo: "A",
    value: "250+",
    name: "Happy Customers",
  },
  {
    logo: "B",
    value: "10+",
    name: "Years of Experience",
  },
  {
    logo: "C",
    value: "250+",
    name: "Destinations Covered",
  },
  {
    logo: "D",
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
            <div className="logo">{item.logo}</div>
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
