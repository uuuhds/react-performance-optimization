import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import routes from "./pages/routes";

function App() {
  return (
    <div className="App h-screen flex">
      <BrowserRouter>
        <nav className="flex h-full flex-col columns-2">
          {routes.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="p-4 text-center bg-amber-100 border-solid border-2 grow"
              >
                {" "}
                {item.name}
              </Link>
            );
          })}
        </nav>
        <main className="p-4 border-2 h-full flex justify-center items-center grow">
          <Routes>
            {routes.map((item) => {
              const Ele = item.element;
              return (
                <Route key={item.path} path={item.path} element={<Ele />} />
              );
            })}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
