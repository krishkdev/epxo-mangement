import axios from "axios";
import React, { useEffect, useState } from "react";
import Stall from "./Stall";

const Stalls = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://obscure-journey-05478.herokuapp.com/api/get-stalls", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="mb-20">
      {state.map((d) => {
        console.log(d);
        return (
          <Stall
            id={d.stall_number}
            name={d.stall_name}
            author={d.username}
            content={d.description}
          />
        );
      })}
    </div>
  );
};

export default Stalls;
