import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 ml-9 h-72 shadow-md bg-gray-100">
      <img className="rounded-lg" alt="imag" src={thumbnails.medium.url} />
      <ul>
        <li className="font-semibold py-2 text-sm">{title}</li>
        <li className="font-bold text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
