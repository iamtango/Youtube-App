import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API, SHORTS_API, VIDEO_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import SuggestionVideo from "./SuggestionVideo";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState(
    []
    // snippet: {
    //     title: "",
    //     description: "",
    //     channelTitle: "",
    //     publishedAt: "",
    //     channelId: "",
    // },
    // statistics: {
    //     commentCount: "",
    //     favoriteCount: "",
    //     likeCount: "",
    //     viewCount: "",
    // },
  );
  const [showDescription, setShowDescription] = useState(false);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const [showChat, setShowChat] = useState(false);
  const [chat, setChat] = useState("Show chat replay");
  const [like, setLike] = useState(false);
  const [subscribe, setSubscribe] = useState("Subscribe");

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDeatils();
    getSuggestedVideos();
  }, [searchParams.get("v")]);

  // console.log(searchParams.get("v"));

  const getVideoDeatils = async () => {
    const data = await fetch(VIDEO_API + "&id=" + searchParams.get("v"));
    const json = await data.json();
    //console.log(json.items[0]);
    setVideoDetails(json.items[0]);
  };
  const getSuggestedVideos = async () => {
    const res = await fetch(SEARCH_RESULT_API + searchParams.get("sq_ch"));

    const sugg = await res.json();
    //console.log(sugg.items);
    setSuggestedVideos(sugg.items);
  };

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const likeHandler = () => {
    setLike(!like);
  };
  const subscribeHandler = () => {
    if (subscribe === "Subscribe") {
      setSubscribe("Subscribed");
    } else {
      setSubscribe("Subscribe");
    }
  };
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const showChatHandler = () => {
    setShowChat(!showChat);
    if (chat === "Show chat replay") {
      setChat("Hide chat replay");
    } else {
      setChat("Show chat replay");
    }
  };

  return (
    <div className="flex flex-row">
      <div className="w-[1000px] flex flex-col ">
        <div className="ml-5 p-5">
          <iframe
            width="1000"
            height="500"
            className="rounded-lg"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&cc_load_policy=1&"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoPlay></iframe>
        </div>
        <div>
          <h1 className="ml-5 p-5 pt-0 font-bold text-xl">
            {videoDetails?.snippet?.title}
          </h1>
          <div className="flex flex-row">
            <h1 className="text-xl font-semibold ml-9 pl-8">
              {"[" + videoDetails?.snippet?.channelTitle + "]"}
            </h1>
            <button
              className="bg-gray-900 ml-2 w-24 rounded-full h-9 text-white font-bold"
              onClick={() => subscribeHandler()}>
              {subscribe}
            </button>
            <div className="ml-[15rem] flex">
              <div
                className={
                  like
                    ? "h-10 flex flex-row cursor-pointer border bg-blue-500 border-black rounded-l-full"
                    : "h-10 flex flex-row cursor-pointer border border-black rounded-l-full"
                }
                onClick={() => likeHandler()}>
                <img
                  alt="like"
                  className="ml-3 mt-1 h-8 bg-gray-600"
                  src="https://logowik.com/content/uploads/images/940_like_icon.jpg"
                />
                <h1 className="m-2 ml-1 font-semibold">Like</h1>
              </div>
              <img
                alt="dislike"
                className=" h-10 p-1 border cursor-pointer border-black rounded-r-full w-16 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYseZbtyOgGArQaUMMFxpMuq_7GZ6z03D0A&usqp=CAU"
              />
              <div className="border w-24 border-black rounded-full ml-2 flex p-1 cursor-pointer h-10">
                <img
                  alt="share"
                  className="h-8 ml-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXvuBh44EUYz1kzTUWYcqz-pxBwsVtfNlaQ&usqp=CAU"
                />
                <h1 className="font-semibold">share</h1>
              </div>
              <div className="border border-black rounded-full ml-2 flex p-1 cursor-pointer h-10">
                <img
                  alt="download"
                  className="ml-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cW80UBJV8GE7ZA21eHacG0pwbcz5fvAKPHbLzH_2sQ&s"
                />
                <h1 className="font-semibold p-1 w-20">download</h1>
              </div>
            </div>
          </div>
          <div
            onClick={() => toggleDescription()}
            className="ml-8 mt-3 p-3 cursor-pointer bg-gray-100 shadow-sm rounded-lg w-[64rem]">
            <div className="flex ">
              <h1 className=" font-semibold ">
                {videoDetails?.statistics?.viewCount} views
              </h1>
              <h1 className="font-semibold ml-5">
                {videoDetails?.statistics?.likeCount / 1000}k Likes
              </h1>
            </div>
            {showDescription && (
              <p className="p-3 text-gray-900">
                {videoDetails?.snippet?.description}
              </p>
            )}
          </div>
          <div className="w-[1000]">
            <CommentsContainer />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-20">
        {/* {
                    videoDetails?.snippet?.liveBroadcastContent !== "none" && 
                } */}
        <div className="cursor-pointer bg-gray-400 text-center rounded-lg">
          <h1 className="font-bold p-2" onClick={() => showChatHandler()}>
            {chat}
          </h1>
          {showChat && (
            <div className="">
              <LiveChat />
            </div>
          )}
        </div>

        <div className="">
          {suggestedVideos[0] &&
            suggestedVideos.map((s, index) => (
              <Link
                to={
                  "/watch?v=" + s.id.videoId + "&sq_ch=" + s.snippet.channelId
                }
                key={index}>
                <SuggestionVideo info={s} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
