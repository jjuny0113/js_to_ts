export const START_GAME = "START_GAME" as const;
export const OPEN_CELL = "OPEN_CELL" as const;
export const CLICK_MINE = "CLICK_MINE" as const;
export const FLAG_CELL = "FLAG_CELL" as const;
export const QUESTION_CELL = "QUESTION_CELL" as const;
export const NORMALIZE_CELL = "NORMALIZE_CELL" as const;
export const INCREMENT_TIMER = "INCREMENT_TIMER" as const;

interface StartGameAction {
  type: typeof START_GAME;
  row: number;
  cell: number;
  mine: number;
}

export const startGame = (
  row: number,
  cell: number,
  mine: number
): StartGameAction => {
  return {
    type: START_GAME,
    row,
    cell,
    mine,
  };
};

// 동적으로 action을 생성하는 함수
// action creator를 사용하는 이유 : row, cell,mine이 매번 바뀌기 때문에
// return 값이 그 액션의 return 값이랑 같으면 된다.

interface OpenCellAction {
  type: typeof OPEN_CELL;
  row: number;
  cell: number;
}

export const openCell = (row: number, cell: number): OpenCellAction => {
  return {
    type: OPEN_CELL,
    row,
    cell,
  };
};

interface ClickMineAction {
  type: typeof CLICK_MINE;
  row: number;
  cell: number;
}

export const clickMine = (row: number, cell: number): ClickMineAction => {
  return {
    type: CLICK_MINE,
    row,
    cell,
  };
};

interface FlagCellAcion {
  type: typeof FLAG_CELL;
  row: number;
  cell: number;
}

export const flagCell = (row: number, cell: number) => {
  return {
    type: FLAG_CELL,
    row,
    cell,
  };
};

interface QuestionCellAction {
  type: typeof QUESTION_CELL;
  row: number;
  cell: number;
}

export const questionCell = (row: number, cell: number) => {
  return { type: QUESTION_CELL, row, cell };
};

interface NormalizeCellAction {
  type: typeof NORMALIZE_CELL;
  row: number;
  cell: number;
}

export const NormalizeCell = (row: number, cell: number) => {
  return { type: NORMALIZE_CELL, row, cell };
};

interface IncrementTimerAction {
  type: typeof INCREMENT_TIMER;
}

export type ReducerAction =
  | StartGameAction
  | OpenCellAction
  | ClickMineAction
  | FlagCellAcion
  | QuestionCellAction
  | NormalizeCellAction
  | IncrementTimerAction;
