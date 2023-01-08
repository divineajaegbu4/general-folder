import React, { useState } from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import classes from "./Dashboard.module.css"

function Testing() {
  const [select, setSelect] = useState();

  return (
    <div className={classes.flagContainer}>
      <CountryDropdown
        id="UNIQUE_ID"
        className={classes.flag}
        preferredCountries=""
        value=""
        handleChange={(e) => console.log(e.target.value)}
      />
      </div>
  );
}

export default Testing;
