import React, { useState } from "react";
import { Button } from "../components";

class PComp extends React.PureComponent<{ count: number }> {
  render() {
    const { count } = this.props;
    console.log("PComp render");
    return <div>{count}</div>;
  }
}
class NormalComp extends React.Component<{ count: number }> {
  shouldComponentUpdate(nextProp: any, nextState: any) {
    // 返回false则不会执行render函数
    return nextProp.count !== this.props.count;
  }
  render() {
    const { count } = this.props;
    console.log("Normal render");
    return <div>{count}</div>;
  }
}

function ShouldComponentUpdateDemo() {
  const [usedCount, setUsedCount] = useState(0);
  const [unUsedCount, setUnusedCount] = useState(0);
  return (
    <div>
      <p>打开浏览器的调试工具</p>
      <p>我们可以看到每次usedCount值加1的时候，两个组件都会重新渲染</p>
      <p>我们可以看到每次unUsedCount值加1的时候，PComp不会重新渲染</p>
      <PComp count={usedCount} />
      <NormalComp count={usedCount} />
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
