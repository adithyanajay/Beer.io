import React, { useEffect, useState } from "react";
import { API, fetchAPI } from "./FetchApi";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import Cards from "./pages/Cards";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

function App() {
  const [data, setData] = useState([{ name: "loading" }]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAPI(API, setData);
  }, []);

  const filteredData = data.filter((data) => {
    if (search === "") {
      return data;
    } else {
      return data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }
  });

  return (
    <div className="bg-stone-50 min-h-screen">
      <Searchbar value={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Cards data={filteredData} />} />
        <Route
          path="item-detail"
          element={<ItemDetail data={filteredData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
