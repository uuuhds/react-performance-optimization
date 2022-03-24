import { useEffect } from "react";
import ReactDOM from "react-dom";

function TimerComp() {
  const timer1Div = document.getElementById("timer1") as HTMLDivElement;
  useEffect(() => {
    setInterval(() => {
      console.log(0);
    }, 1000);
  });
  return (
    <div className="mt-5">
      <p>这是一个一直打印0并且卸载时不会自动清理的Timer组件</p>
      <button
        className="p-2 border-2 bg-amber-200 rounded"
        onClick={() => ReactDOM.unmountComponentAtNode(timer1Div)}
      >
        卸载打印0的组件
      </button>
    </div>
  );
}

function AutoClearTimerComp() {
  const timer2Div = document.getElementById("timer2") as HTMLDivElement;
  useEffect(() => {
    let timer = setInterval(() => {
      console.log(1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="mt-5">
      <p>这是一个一直打印1000并且卸载时会自动清理的Timer组件</p>
      <button
        className="p-2 bg-amber-200 border-2 rounded"
        onClick={() => ReactDOM.unmountComponentAtNode(timer2Div)}
      >
        卸载打印1000的组件
      </button>
    </div>
  );
}

function UnMountClear() {
  useEffect(() => {
    const timer1Div = document.getElementById("timer1") as HTMLDivElement;
    const timer2Div = document.getElementById("timer2") as HTMLDivElement;
    ReactDOM.render(<TimerComp />, timer1Div);
    ReactDOM.render(<AutoClearTimerComp />, timer2Div);
  }, []);
  return (
    <div className="p-4 border-cyan-100 border-2">
      <h2 className="text-xl font-sans font-semibold">
        常规来讲，我们如果在组件中写入一个定时器或者事件监听，在组件卸载的时候是不会清理的，此时需要我们手动的进行清理
      </h2>
      <div id="timer1"></div>
      <div id="timer2"></div>

      <p className="mt-6 ">
        点击两个卸载按钮后发现0还在被打印，但是1000已经不打印了
      </p>
    </div>
  );
}

export default UnMountClear;
