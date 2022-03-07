import React from "react";

const ListErrors = ({ errors }) => (
  <ul className="error-messages">
    {errors
      ? Object.keys(errors).map((key) => {
          return (
            <li key={key}>
              {key} {errors[key]}
            </li>
          );
        })
      : null}
  </ul>
);

export default ListErrors;
