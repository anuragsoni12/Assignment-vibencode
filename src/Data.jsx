import React, { useEffect, useState } from "react";
import { List } from "./List";

export const Data = () => {
  const [apiData_state, set_apiData_state] = useState([]);
  const callApiFn = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Vibencode-Solutions/mock-api/main/api.json"
    );
    const apiData = await response.json();
    set_apiData_state(apiData);
    console.log(apiData, "apiData :::");
  };
  useEffect(() => {
    callApiFn();
  }, []);
  return (
    <div>
      {/* <List listData="listData" /> */}
      <List apiData_state={apiData_state} />
    </div>
  );
};
