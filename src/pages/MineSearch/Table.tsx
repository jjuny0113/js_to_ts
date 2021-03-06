import React, { useContext } from "react";
import Tr from "./Tr";
import { TableContext } from "./MineSearch";

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill(null)
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
