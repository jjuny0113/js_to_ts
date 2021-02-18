import React, { ChangeEvent, FormEvent, useState } from "react";
import TryFunc from "./TryFunc";
import { TryInfo } from "./types";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

const NumberBaseballFunction = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState<TryInfo[]>([]);

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevTires) => {
        return [...prevTires, { try: value, result: "홈런" }];
      });
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      // 답틀렸으면
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀러셔 실패! 답은 ${answer.join(",")}였습니다.`);
        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray)) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` },
          ];
        });
        setValue("");
      }
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(answer);
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((tri, idx) => (
          <TryFunc key={idx + 1} tryInfo={tri} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseballFunction;
