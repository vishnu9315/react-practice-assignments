import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const PromiseEx = () => {
    let friend = new Promise((resolve, reject) => {
      let chocolateGiven = false;

      if (chocolateGiven) {
        resolve("Promise resolved");
      } else {
        reject("Rejected");
      }
    });

    friend
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  PromiseEx();

  return <div className="App"></div>;
}
