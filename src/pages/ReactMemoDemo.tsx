import React, { useState } from "react";
import { Button } from "../components";

function FuncComp({ count }: { count: number }) {
  console.log("FuncComp render");
  return <div>{count}</div>;
}

const MemoFuncComp = React.memo(FuncComp, (prevProps, nextProps) => {
  // 返回true不进行渲染
  return prevProps.count === nextProps.count;
});

function ShouldComponentUpdateDemo() {
  const [usedCount, setUsedCount] = useState(0);
  const [unUsedCount, setUnusedCount] = useState(0);
  return (
    <div>
      <p>打开浏览器的调试工具</p>
      <p>我们可以看到每次usedCount值加1的时候，MemoFuncComp会重新渲染</p>
      <p>我们可以看到每次unUsedCount值加1的时候，MemoFuncComp不会渲染</p>
      <MemoFuncComp count={usedCount} />
      <h4>{unUsedCount}</h4>
      <Button
        onClick={() => {
          setUsedCount(usedCount + 1);
        }}
      >
        UsedCount + 1
      </Button>
      <Button
        onClick={() => {
          setUnusedCount(unUsedCount + 1);
        }}
      >
        UnUsedCount + 1
      </Button>
    </div>
  );
}

export default ShouldComponentUpdateDemo;
