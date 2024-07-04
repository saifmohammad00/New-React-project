import React, { useState } from "react";
import MyTitle from "./components/MyTitle/MyTitle";
import MyForm from "./components/MyForm/MyForm";

function App() {
  const [listData, setListData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const updateListData = (newListData) => {
      setListData(newListData);
  }

  const getFilteredCount = () => {
      if (searchQuery.trim() === "") {
          return listData.length;
      } else {
          return listData.filter((notebook) =>
              notebook.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length;
      }
  }

  return (
    <div >
      <MyTitle  totalNotes={listData.length} 
                setSearchQuery={setSearchQuery} 
                filteredCount={getFilteredCount()}/>
      <MyForm   updateListData={updateListData} 
                listData={listData} 
                searchQuery={searchQuery} />
    </div>
  );
}

export default App;
