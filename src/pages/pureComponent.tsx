import React, { useState } from "react";
import { Button } from "../components";
class PComp extends React.PureComponent<{ count: number }> {
  render() {
    const { count } = this.props;
    console.log("PComp render");
    return <div>{count}</div>;
  }
}
class PCompComplex extends React.PureComponent<{ count: { value: number } }> {
  render() {
    const {
      count: { value },
    } = this.props;
    console.log("PCompComplex render");
    return <div>{value}</div>;
  }
}

class NormalComp extends React.Component<{ count: number }> {
  render() {
    const { count } = this.props;
    console.log("Normal render");
    return <div>{count}</div>;
  }
}

class NormalCompComplex extends React.Component<{ count: { value: number } }> {
  render() {
    const {
      count: { value },
    } = this.props;
    console.log("NormalCompComplex render");
    return <div>{value}</div>;
  }
}

function PureCompDemo() {
  const [usedCount, setUsedCount] = useState(0);
  const [unUsedCount, setUnusedCount] = useState(0);
  return (
    <div>
      <p>打开浏览器的调试工具</p>
      <p>我们可以看到每次usedCount值加1的时候，两个组件都会重新渲染</p>
      <p>我们可以看到每次unUsedCount值加1的时候，PComp不会重新渲染</p>
      <PComp count={usedCount} />
      <NormalComp count={usedCount} />
      <PCompComplex count={{ value: usedCount }} />
      <NormalCompComplex count={{ value: usedCount }} />
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

export default PureCompDemo;
