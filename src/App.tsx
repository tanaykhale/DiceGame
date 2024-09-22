import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DiceLayout from "./components/DiceLayout";
import Gamelayout from "./components/Gamelayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DiceLayout></DiceLayout>}></Route>
        <Route path="/Gamelayout" element={<Gamelayout></Gamelayout>}></Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
