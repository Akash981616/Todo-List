import React from "react";
import Search from "./components/Search";
import Page from "./Page"
import Todo from "./components/Todo";

function App() {
  return (
    <div className=" dark:bg-gray-900 flex justify-center items-center px-96">
    <Page/>
    {/* <Search/> */}
    </div>
  );
}

export default App;
