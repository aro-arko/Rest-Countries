import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country, remove = false) => {
    const isVisited = visitedCountries.includes(country);

    if (!isVisited && !remove) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    } else if (!isVisited && remove) {
      const newVisitedCountries = visitedCountries.filter(
        (already_country) => already_country !== country
      );
      setVisitedCountries(newVisitedCountries);
    }
  };

  //   const handleRemoveContries = () => {};
  return (
    <div className="countries">
      <h1>Country Details</h1>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            key={country.cca3}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
