import React from "react";
import {
  UnMountClear,
  PureCompDemo,
  ShouldComponentUpdate,
  ReactMemoDemo,
  LazyLoadDemo,
  FragmentDemo,
  NoInlineFunction,
  ErrorBoundariesDemo,
} from "./";

interface Route {
  path: string;
  element: React.FC | React.ComponentClass;
  name: string;
}

const routes: Route[] = [
  {
    path: "/unMountClear",
    element: UnMountClear,
    name: "unmountClear",
  },
  {
    path: "/pureCompDemo",
    element: PureCompDemo,
    name: "PureCompDemo",
  },
  {
    path: "/ShouldComponentUpdate",
    element: ShouldComponentUpdate,
    name: "ShouldComponentUpdate",
  },
  {
    path: "/ReactMemoDemo",
    element: ReactMemoDemo,
    name: "ReactMemoDemo",
  },
  {
    path: "/LazyLoadDemo",
    element: LazyLoadDemo,
    name: "LazyLoadDemo",
  },
  {
    path: "FragmentDemo",
    element: FragmentDemo,
    name: "FragmentDemo",
  },
  {
    path: "NoInlineFunction",
    element: NoInlineFunction,
    name: "NoInlineFunction",
  },
  {
    path: "ErrorBoundariesDemo",
    element: ErrorBoundariesDemo,
    name: "ErrorBoundariesDemo",
  },
];

export default routes;
