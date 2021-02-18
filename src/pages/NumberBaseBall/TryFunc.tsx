import React, { FunctionComponent } from "react";
import { TryInfo } from "./types";

const TryFunc: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default TryFunc;
