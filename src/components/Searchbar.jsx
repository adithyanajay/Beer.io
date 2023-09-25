import React from "react";
import { beer, search } from "../assests";
import { useNavigate } from "react-router-dom";



function Searchbar({value, setSearch}) {

  const handleChange = (e)=>{
    setSearch(e.target.value)
    window.scrollTo({top:0})
  }

  const navigate = useNavigate();
  const tohome = () => {
    navigate(`/`, { state:"" });
  };
  

  return (
    <nav className="w-full px-5 py-3 bg-white shadow-md sticky top-0 left-0 z-10">
      <div className="container flex justify-between items-center max-w-5xl w-full m-auto">
        <a className="logo flex justify-center items-end" href="/">
          <div className="logo  w-16">
            <img src={beer} alt="logo" className="w-full" />
          </div>
          <h2 className="font-bold text-xl hidden sm:block">Beer.io</h2>
        </a>

        <div className="search flex justify-start items-center gap-2 border-2 rounded-md border-grey px-2 py-1 max-w-xs">
          <div className="img-cont w-4 sm:w-5">
            <img src={search} alt="search" className="w-full" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none w-full"
            value={value}
            onChange={handleChange}
            onClick={tohome}
            
          />
        </div>
      </div>
    </nav>
  );
}

export default Searchbar;
