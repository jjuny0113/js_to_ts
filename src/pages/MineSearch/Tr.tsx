import React, { useContext, FC } from "react";
import { TableContext } from "./MineSearch";
import Td from "./Td";

interface Props {
  rowIndex: number;
}

const Tr: FC<Props> = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill(null)
          .map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} key={i} />)}
    </tr>
  );
};

export default React.memo(Tr);
