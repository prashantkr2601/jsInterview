import React, { useEffect, useState } from "react";
import "./Doit.css";

const list = [
  {
    question: "Creating and nesting components",
    answer:
      "React apps are made out of components. A component is a piece of the UI (user interface)",
  },
  {
    question: "Creating and nesting components",
    answer:
      "React apps are made out of components. A component is a piece of the UI (user interface)",
  },
  {
    question: "Creating and nesting components",
    answer:
      "React apps are made out of components. A component is a piece of the UI (user interface)",
  },
  {
    question: "Creating and nesting components",
    answer:
      "React apps are made out of components. A component is a piece of the UI (user interface)",
  },
  {
    question: "Creating and nesting components",
    answer:
      "React apps are made out of components. A component is a piece of the UI (user interface) th",
  },
];

const Doit = () => {
  const [listData, setListData] = useState(list);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  const handleDelete = (index) => {
    const tempList = [...listData];
    tempList.splice(index, 1);
    setListData(tempList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      question: question,
      answer: answer,
    };

    setListData([...listData, payload]);

    setAnswer("");
    setQuestion("");
    console.log(listData);
  };

  return (
    <div className="content">
      {listData &&
        listData.map((item, index) => {
          return (
            <div className="main" key="index">
              <div
                className="main__content"
                onClick={() => {
                  if (activeItem === index) {
                    setActiveItem(null);
                  } else {
                    setActiveItem(index);
                  }
                }}
              >
                <div className="main__content--ques">{item?.question}</div>
                <div className="main__content--icon">
                  {activeItem === index ? "-" : "+"}
                </div>
              </div>
              {activeItem === index && (
                <>
                  <div className="main__content--ans">{item?.answer}</div>
                  <div className="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </div>
                </>
              )}
            </div>
          );
        })}
      <div className="add-btn">
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)} styles="margin-left:15px">
          ADD
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default Doit;
