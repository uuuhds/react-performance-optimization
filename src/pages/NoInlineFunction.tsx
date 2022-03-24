import React, { useState } from "react";

interface ButtonInterface {
  onClick: any;
}

function Button({ onClick }: ButtonInterface) {
  console.log("button render");
  return <button onClick={onClick}>点击</button>;
}

function NoInlineFunction() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col">
        <p>
          在使用内联函数后, render 方法每次运行时都会创建该函数的新实例, 导致
          React 在进行 Virtual DOM 比对时, 新旧函数比对不相等，导致 React
          总是为元素绑定新的函数实例, 而旧的函数实例又要交给垃圾回收器处理.{" "}
        </p>
        <div>{count}</div>
        <Button onClick={() => setCount(count + 1)} />
      </div>
    </>
  );
}

export default NoInlineFunction;
