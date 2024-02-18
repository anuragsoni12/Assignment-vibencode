import React from "react";

export const List = (props) => {
  const { apiData_state } = props;

  console.log(apiData_state, "apiData_state");
  console.log(apiData_state[0], "apiData_state child");
  return (
    <div style={{ marginLeft: "20px" }}>
      {apiData_state &&
        apiData_state.map((item) => (
          <div>
            <li>{item.name}</li>
            {/* <p>{item.name}</p> */}
            {item.child && <List apiData_state={item.child} />}
          </div>
        ))}
    </div>
  );
};
