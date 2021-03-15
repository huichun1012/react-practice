import React, { useState } from "react";

const Accordion = ({ items }) => {
  // this is an array destructuring
  // useState會回傳一個array內含兩個element
  // 定義將第一個element拿出來命名為activeIndex
  // 將第二個element拿出來命名為setActiveIndex
  // null為initial state值
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const toRenderItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {toRenderItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
