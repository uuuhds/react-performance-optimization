import React from "react";

function ErrorComp() {
  throw new Error("Error Comp");
  return <div></div>;
}

export default class ErrorBoundaries extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error: any) {
    console.log("componentDidCatch");
  }
  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError");
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <div>发生了错误</div>;
    }
    return <ErrorComp />;
  }
}
