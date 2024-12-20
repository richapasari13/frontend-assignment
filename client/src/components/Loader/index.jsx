import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <tr data-testid="loading">
      <td><div className="skeleton" /></td>
      <td><div className="skeleton" /></td>
      <td><div className="skeleton" /></td>
    </tr>
  );
};

export default Loader;
