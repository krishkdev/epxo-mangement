import axios from "axios";
import React, { useEffect, useState } from "react";
import Stall from "./Stall";
//var localdata = [
// {
//     id:1,
//     name: "Nano tech",
//     author: "krak",
//     content: "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."
// },
// {
//     id:2,
//     name: "Bada tech",
//     author: "mahhss",
//     content: "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."
// }
//]

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
        //console.log(data)
        setState(data);
      })
      .catch((e) => console.log(e));
  }, []);
  //var {localdata} = axios.get('https://obscure-journey-05478.herokuapp.com/api/get-stalls')
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
