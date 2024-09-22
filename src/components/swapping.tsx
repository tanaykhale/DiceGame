import { useState } from "react";

export default function swapping() {
  const [msgleft, setMsgleft] = useState("");
  const [msgRight, setMsgRight] = useState("");
  const toRight = (msg: string) => {
    setMsgRight(msg);
  };
  const toLeft = (msg: string) => {
    setMsgleft(msg);
  };
  return (
    <div className="container">
      <form action="">
        <textarea
          value={msgleft}
          name="msg1"
          id=""
          onChange={(e) => {
            setMsgleft(e.target.value);
          }}
        ></textarea>
        <div className="buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              toRight(msgleft);
            }}
          >
            To right
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              toLeft(msgRight);
            }}
          >
            To left
          </button>
        </div>
        <textarea
          value={msgRight}
          name="msg2"
          id=""
          onChange={(e) => {
            setMsgRight(e.target.value);
          }}
        ></textarea>
      </form>
      <button
        onClick={(e) => {
          {
            e.preventDefault();
            setMsgRight("");
            setMsgleft("");
          }
        }}
      >
        Reset
      </button>
    </div>
  );
}
