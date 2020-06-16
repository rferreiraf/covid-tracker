import React from "react";

export const CheckBoxComponent = ({ checkBox, handleCheckBox }) => {
  return (
    <form className="form-container">
      <label className="select-label">
        Show Cases
        <input
          style={{ marginLeft: "5px" }}
          name="cases"
          type="checkbox"
          checked={checkBox.cases}
          onChange={(e) => handleCheckBox(e.target.name)}
        />
        <span className="checkmark checkmark-cases"></span>
      </label>
      <label className="select-label">
        Show Deaths
        <input
          style={{ marginLeft: "5px" }}
          name="deaths"
          type="checkbox"
          checked={checkBox.deaths}
          onChange={(e) => handleCheckBox(e.target.name)}
        />
        <span className="checkmark checkmark-deaths"></span>
      </label>
      <label className="select-label ">
        Show Recovered
        <input
          style={{ marginLeft: "5px" }}
          name="recovered"
          type="checkbox"
          checked={checkBox.recovered}
          onChange={(e) => handleCheckBox(e.target.name)}
        />
        <span className="checkmark checkmark-recovered"></span>
      </label>
    </form>
  );
};
