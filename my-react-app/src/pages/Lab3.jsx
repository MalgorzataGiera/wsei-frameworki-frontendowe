import React from "react";
import FlexContainer from "../components/FlexContainer";
import Item from "../components/Item";
import { data } from "../data/module-data";


function Lab3() {
  return (
    <div>
      <h2>Lab 3</h2>
      <FlexContainer element={Item} data={data} />
    </div>
  );
}

export default Lab3;
