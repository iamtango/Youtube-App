import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center m-1 shadow-md">
      <img
        className="h-9"
        alt="profile-logo"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{text}</span>
    </div>
  );
};

export default ChatMessage;
