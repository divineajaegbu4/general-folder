import React, { useEffect, useState } from "react";

import classes from "./Beneficiary.module.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function ReactFlag(props) {


  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, errorMessage, countries } = countryState;

  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === props.selectValue) {
      return true;
    }
    return false;
  });
  return (
    <div>
  
      <div>
        <select
          value={props.selectValue}
          onChange={props.handle}
          className={classes.inputWidth}
        >
          <option className={classes.position}>Select Country</option>
          {countries.map((item) => {
            return (
              <option key={uuidv4()} value={item.name.common}>
                {item.name.common}
              </option>
            );
          })}
        </select>
      </div>

      <div className={classes.positionFlag}>
        {searchSelectedCountry && (
          <div>
            <img 
              className={classes.positionFlagImg}
              src={searchSelectedCountry && searchSelectedCountry.flags.png}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactFlag;
