import React, { useState } from "react";
import "./ColorText.css";

const ColorText = ({ label }) => {
  let [amountClicked, setAmountClicked] = useState(0);

  return (
    <li className="pointer" onClick={() => setAmountClicked(amountClicked + 1)}>
      {label}
      {amountClicked > 0 ? `(${amountClicked})` : null}
    </li>
  );
};

export default ColorText;