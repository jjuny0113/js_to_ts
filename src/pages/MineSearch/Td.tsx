import React, { useCallback, useContext, FC } from "react";
import { CODE, Codes, TableContext } from "./MineSearch";
import {
  openCell,
  clickMine,
  flagCell,
  questionCell,
  NormalizeCell,
} from "./action";

const getTdStyle = (code: Codes) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: "white",
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: "yellow",
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: "red",
      };
    default:
      return {
        background: "white",
      };
  }
};

const getTdText = (code: Codes) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "x";
    case CODE.CLICKED_MINE:
      return "펑";
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return "!";
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return "?";
    default:
      return code || "";
  }
};

interface Props {
  rowIndex: number;
  cellIndex: number;
}

const Td: FC<Props> = ({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        return;
      case CODE.NORMAL:
        dispatch(openCell(rowIndex, cellIndex));
        break;
      case CODE.MINE:
        dispatch(clickMine(rowIndex, cellIndex));
        break;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
      e.preventDefault();
      if (halted) {
        return;
      }
      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch(flagCell(rowIndex, cellIndex));
          break;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          dispatch(questionCell(rowIndex, cellIndex));
          break;
        case CODE.QUESTION:
          dispatch(NormalizeCell(rowIndex, cellIndex));
          break;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return (
    <td
      style={getTdStyle(tableData[rowIndex][cellIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default React.memo(Td);
