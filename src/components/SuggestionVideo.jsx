import React from "react";

const SuggestionVideo = ({ info }) => {
  return (
    <div className="w-full shadow-md bg-gray-200 flex my-3 mx-1 rounded-lg mt-1">
      <img
        alt="alternate"
        src={info.snippet.thumbnails.high.url}
        className="w-[200px] h-[150px]"
      />
      <div className="flex flex-col p-2 pl-3 justify-center overflow-ellipsis">
        {/* <p className='font-bold'>{info.snippet.title}</p> */}
        <p className="font-bold">{info.snippet.channelTitle}</p>
        <p className="font-bold">{info.snippet.publishTime}</p>
      </div>
    </div>
  );
};

export default SuggestionVideo;
