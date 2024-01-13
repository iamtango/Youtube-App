import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log("api call:" + searchQuery);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHnadler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1  shadow-lg bg-white w-full top-0  fixed z-50">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHnadler()}
          className="h-10 p-1 m-2 cursor-pointer"
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
        />
        <a href="/">
          <img
            className="h-14 "
            alt="youtube-logo"
            src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 text-center p-4 flex justify-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              window.location.href = "/results?search_query=" + searchQuery;
            }
          }}
        />
        {/* <Link to={"/results?search_query=" + searchQuery}></Link> */}
        <button
          onClick={() =>
            (window.location.href = "/results?search_query=" + searchQuery)
          }
          className="border border-gray-400 rounded-r-full p-1 w-10 bg-gray-100">
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white w-[34rem] shadow-lg rounded-lg border border-gray-200 mt-12 text-left p-2 mr-8">
            <ul>
              {suggestions.map(
                (s, index) =>
                  s[0] && (
                    <li
                      onClick={() =>
                        (window.location.href = "/results?search_query=" + s)
                      }
                      key={index}
                      className="py-2 px-3 shadow-sm hover:bg-gray-200">
                      🔍 {s}
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 ml-auto">
        <img
          className="h-9 mt-4 w-9"
          alt="notifications"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />

        <img
          className="h-16"
          alt="profile-logo"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
