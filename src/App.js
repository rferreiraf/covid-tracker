import React, { useEffect, useState } from "react";
import "./App.css";
import { CardsListComponent } from "./components/CardsListComponent";
import { MapsComponent } from "./components/MapsComponent";
import { SelectComponent } from "./components/SelectComponent";
import { CheckBoxComponent } from "./components/CheckBoxComponent";

import axios from "axios";
import { fetchCountry } from "./API/index.js";
import { NavComponent } from "./components/NavComponent";

function App() {
  const [latest, setLatest] = useState("");
  const [latestGlobal, setLatestGlobal] = useState("");
  const [countries, setCountries] = useState([]);
  const [latLong, setLatLong] = useState({ lat: 38.7369, lng: -9.1426 });
  const [defaultSelect, setDefaultSelect] = useState("global");
  const [checkBox, setCheckBox] = useState({
    cases: true,
    deaths: false,
    recovered: false,
  });

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((res) => {
        setLatest(res[0].data);
        setLatestGlobal(res[0].data);
        setCountries(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const countriesLocations = countries.map((data, i) => {
    let mapTextt = "";
    let textColor = "";
    if (checkBox.cases === true) {
      mapTextt = data.cases;
      textColor = "grey";
    } else if (checkBox.deaths === true) {
      mapTextt = data.deaths;
      textColor = "red";
    } else {
      mapTextt = data.recovered;
      textColor = "green";
    }
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        alt={data.country}
        style={{
          color: textColor,
          backgroundColor: "#FFF",
          height: "30px",
          width: "44px",
          textAlign: "center",
          borderRadius: "5px",
          border: "1px solid #000",
          cursor: "pointer",
        }}
        onClick={(e) => onCLickIconMap(e.target)}
      >
        <img
          style={{ pointerEvents: "none" }}
          height="10px"
          src={data.countryInfo.flag}
        />
        <br />
        {mapTextt}
      </div>
    );
  });

  async function onChangeSelect(value) {
    if (value === "global") {
      setLatest(latestGlobal);
      setDefaultSelect("global");
    } else {
      let country = await fetchCountry(value);
      setLatLong({
        lat: country.countryInfo.lat,
        lng: country.countryInfo.long,
      });
      setLatest(country);
      setDefaultSelect(value);
    }
  }

  async function onCLickIconMap(value) {
    let country = await fetchCountry(value.getAttribute("alt"));
    setLatLong({ lat: country.countryInfo.lat, lng: country.countryInfo.long });
    setLatest(country);
    setDefaultSelect(value.getAttribute("alt"));
  }

  function handleCheckBox(value) {
    if (value === "cases") {
      setCheckBox({
        cases: true,
        deaths: false,
        recovered: false,
      });
    } else if (value === "deaths") {
      setCheckBox({
        cases: false,
        deaths: true,
        recovered: false,
      });
    } else {
      setCheckBox({
        cases: false,
        deaths: false,
        recovered: true,
      });
    }
  }

  return (
    <div className="App">
      <div className="header-container">
        <NavComponent></NavComponent>
      </div>
      <div className="body-container">
        <CardsListComponent
          cases={latest.cases}
          deaths={latest.deaths}
          recovered={latest.recovered}
        ></CardsListComponent>

        <div className="container-select-checkbox">
          <SelectComponent
            defaultSelect={defaultSelect}
            onChangeSelect={onChangeSelect}
          ></SelectComponent>

          <CheckBoxComponent
            checkBox={checkBox}
            handleCheckBox={handleCheckBox}
          ></CheckBoxComponent>
        </div>
        <div className="map-container">
          <MapsComponent
            latLong={latLong}
            countriesListLocations={countriesLocations}
            onCLickIconMap={onCLickIconMap}
          ></MapsComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
