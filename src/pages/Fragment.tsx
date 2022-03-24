import React, { useState } from "react";

export default function FragmentDemo() {
  //   const [fruits] = useState(["apple", "banana"]);
  return (
    <>
      <p>
        我们知道react组件返回的时候只能返回一个节点，那一般常规的做法就是添加一个div标签，但是这样会导致diff树的高度变大，我们可以使用React.Frament来对组件进行包裹，避免新增冗余节点
      </p>
      <br />
      {/* <ul>
        {fruits.map((fruit) => (
          <React.Fragment key={fruit}>
            <li>{fruit}</li>
          </React.Fragment>
        ))}
      </ul> */}
    </>
  );
}
