import { useState } from "react";

function App() {
  const [name, setName] = useState("none");
  const [fullName, setFullName] = useState(name);
  // let curr_name; // don't do this with this method, better to use another useSate for full name
  function input(event) {
    // setName(event.target.value); <--- else it will show the name dynamically word by word
    // curr_name = event.target.value;
    setName(event.target.value);
  }
  function add() {
    // setName(curr_name);
    setFullName(name);
  }
  return (
    <div className="items-center content-center w-screen h-screen grid grid-rows-4 justify-content-center justify-items-center">
      <div className="text-3xl font-bold ">
        Hello
        <span className="text-5xl font-light">
          {fullName === "none" ? " " : " " + fullName}
        </span>
      </div>
      <div className="">
        <input
          className="p-4 mx-4 font-sans text-3xl border-4 rounded-3xl row-stat-4 row-end-5 row-span-1 focus:outline-none focus:border-red-500"
          type="text"
          placeholder="type here ..."
          onChange={input}
        />
        <button
          onClick={add}
          className="p-4 font-sans text-2xl bg-red-500 border-4 border-red-500 rounded-full row-start-5 row-end-6 row-span-1 hover:border-red-800"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
