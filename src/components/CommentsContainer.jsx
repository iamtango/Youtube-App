import React from "react";

const commentsData = [
  {
    name: "Bharath Raj",
    text: "your videos are so cool bro!!!",
    replies: [
      {
        name: "Eswar",
        text: "Big fan bro 😂😂",
        replies: [
          {
            name: "Bharath Raj",
            text: "your videos are so cool bro!!!",
            replies: [
              {
                name: "Bharath Raj",
                text: "Hi bro",
                replies: [
                  {
                    name: "Bharath Raj",
                    text: "Great video! 👍",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Naveen virat",
            text: "Great video! 👍",
            replies: [],
          },
        ],
      },
      {
        name: "Bharath Raj",
        text: "Tiger is always tiger 🐅Cinema stadium me badlne wala hai💥",
        replies: [],
      },
    ],
  },
  {
    name: "Bharath Raj",
    text: "This movie is going to be an unforgettable experience! 🎥🔥",
    replies: [],
  },
  {
    name: "Bharath Raj",
    text: "your videos are so cool bro!!!",
    replies: [],
  },
  {
    name: "Bharath Raj",
    text: "your videos are so cool bro!!!",
    replies: [
      {
        name: "Bharath Raj",
        text: "your videos are so cool bro!!!",
        replies: [],
      },
    ],
  },
  {
    name: "Bharath Raj",
    text: "your videos are so cool bro!!!",
    replies: [],
  },
  {
    name: "Bharath Raj",
    text: "your videos are so cool bro!!!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg w-[63rem] m-2">
      <img
        className="h-16 rounded-full"
        alt="profile-logo"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
      />
      <div className="p-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="w-full">
      <Comment key={index} data={comment} />
      <div className="ml-5 shadow-sm border border-l-black w-full">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-10 mt-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
