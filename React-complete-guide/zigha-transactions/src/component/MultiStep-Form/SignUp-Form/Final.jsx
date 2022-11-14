import React from "react";

const Final = ({ values }) => {
  //destructuring the object from values
  const { firstName, lastName, number, email, address, city, password } =
    values;
  return (
    <div>
      <p>
        <strong>First Name :</strong> {firstName}
      </p>
      <p>
        <strong>Last Name :</strong> {lastName}
      </p>
      <p>
        <strong>number :</strong> +234{number}
      </p>
      <p>
        <strong>Business Name:</strong> {firstName}
      </p>
      <p>
        <strong>Business Email:</strong> {email}
      </p>
      <p>
        <strong>CAC Number:</strong> {number}
      </p>
      <p>
        <strong>Address :</strong> {address}
      </p>
      <p>
        <strong>City :</strong> {city}
      </p>
      <p></p>
      <p>
        <strong>BVN :</strong> {password}
      </p>
    </div>
  );
};

export default Final;
