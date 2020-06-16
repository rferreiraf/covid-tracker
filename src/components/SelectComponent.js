import React, { useEffect, useState } from "react";

import { fetchCountries } from "../API/index.js";

export const SelectComponent = ({ defaultSelect, onChangeSelect }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className="select-wrapper">
      <div className="select-container">
        <select
          value={defaultSelect}
          name="format"
          id="format"
          onChange={(e) => onChangeSelect(e.target.value)}
        >
          <option value="global" selected>
            Global
          </option>
          {fetchedCountries.map((country, i) => {
            return (
              <option key={i} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
