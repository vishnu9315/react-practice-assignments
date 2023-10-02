import React, { Suspense } from "react";
// import Lorem from "./Lorem";
import "./styles.css";
import Loader from "./Loader";

const Lorem = React.lazy(() => import("./Lorem"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Lorem />
      </Suspense>
    </div>
  );
}
