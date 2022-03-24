import { lazy, Suspense } from "react";

export default function LazyLoadDemo() {
  let LazyComponent = null;
  if (true) {
    LazyComponent = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
  } else {
    LazyComponent = lazy(() => import(/* webpackChunkName: "List" */ "./List"));
  }
  return (
    <Suspense fallback={<div>Loading</div>}>
      <LazyComponent />
      <p>此时抓取网络可以看到会有一个/Home.chunk.js文件被加载</p>
    </Suspense>
  );
}
