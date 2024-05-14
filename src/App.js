import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./component/Counter";
import ListOfItems from "./component/ListOfItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/items" element={<ListOfItems />} />
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
