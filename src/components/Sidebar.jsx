import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // useEffect(() => {
  //     getSubscriptions();
  // }, []);

  // const getSubscriptions = async () => {
  //     const data = await fetch(SUBSCRIPTIONS_API);
  //     const json = await data.json();
  //     console.log(json);
  // }

  if (!isMenuOpen) return null;

  return (
    <div className="p-1 w-48 shadow-lg bg-white fixed l-0 overflow-y-scroll h-screen max-h-[85vh]">
      <ul className="font-semibold p-3 text-gray-700">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="text-xl font-semibold underline">Explore</h1>
      <ul className="ml-5 p-3 font-semibold text-gray-700">
        <Link to={"/results?search_query=Trending"}>
          <li>Trending</li>
        </Link>
        <Link to={"/results?search_query=Shopping"}>
          <li>Shopping</li>
        </Link>
        <Link to={"/results?search_query=music"}>
          <li>Music</li>
        </Link>
        <Link to={"/results?search_query=movies"}>
          <li>Movies</li>
        </Link>
        <Link to={"/results?search_query=live"}>
          <li>Live</li>
        </Link>
        <Link to={"/results?search_query=gaming"}>
          <li>Gaming</li>
        </Link>
      </ul>
      <h1 className="text-xl font-semibold underline">Explore</h1>
      <ul className="ml-5 p-3 font-semibold text-gray-700">
        <Link to={"/results?search_query=learnings"}>
          <li>Learnings</li>
        </Link>
        <Link to={"/results?search_query=Fashion"}>
          <li>Fashion</li>
        </Link>
        <Link to={"/results?search_query=Cooking"}>
          <li>Cooking</li>
        </Link>
        <Link to={"/results?search_query=take u forward"}>
          <li>Take u forward</li>
        </Link>
        <Link to={"/results?search_query=akshay saini"}>
          <li>Akshay Saini</li>
        </Link>
        <Link to={"/results?search_query=geeks for geeks"}>
          <li>Geeks For Geeks</li>
        </Link>
      </ul>
      <h1 className="text-xl font-semibold underline">More from youtube</h1>
      <ul className="ml-5 p-3 font-semibold text-gray-700">
        <li>Youtube studio</li>
        <li>Youtube premium</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
