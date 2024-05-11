import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, region, timezones } = country;
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
    if (!visited) {
      handleVisitedCountries(country);
    }
  };

  return (
    <div className="country">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <h4>Region: {region}</h4>
      <h4>Population: {population}</h4>
      <h4>TimeZone: {timezones[0]}</h4>
      <button className="visit-country" onClick={handleVisit}>
        {visited ? "Visited" : "Go on"}
      </button>
    </div>
  );
};

export default Country;
