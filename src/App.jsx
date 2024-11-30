import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers, projectRouters } from "./Routers/Routers";
import { Suspense } from "react";
import LoadingBar from "@components/Loading/Loading";


function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingBar/>}>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              );
            })}
            {projectRouters.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.component />}
                  key={index}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
