const nameList = [
  "Aarav Patel",
  "Aarushi Sharma",
  "Abhishek Singh",
  "Aditi Mishra",
  "Akshay Kumar",
  "Ananya Gupta",
  "Anika Choudhury",
  "Arjun Mehra",
  "Aryan Kapoor",
  "Asha Verma",
  "Ayush Sharma",
  "Bhavya Reddy",
  "Deepak Tiwari",
  "Dia Mehta",
  "Divya Yadav",
  "Gaurav Chauhan",
  "Geeta Joshi",
  "Harshita Agarwal",
  "Ishan Goyal",
  "Jai Singh",
  "Kriti Khanna",
  "Krish Sharma",
  "Mahi Verma",
  "Manish Kumar",
  "Meera Singh",
  "Mohan Gupta",
  "Natasha Patel",
  "Nikhil Sharma",
  "Pooja Singh",
  "Priya Malhotra",
  "Rahul Verma",
  "Rhea Kapoor",
  "Rishi Agarwal",
  "Rohan Reddy",
  "Ruchi Bansal",
  "Rupali Tiwari",
  "Sachin Mehta",
  "Sameer Kumar",
  "Sanjay Gupta",
  "Shreya Agarwal",
  "Shruti Sharma",
  "Simran Choudhury",
  "Sonia Mehra",
  "Suman Tiwari",
  "Sunil Verma",
  "Swati Yadav",
  "Ujjwal Bansal",
  "Vansh Khanna",
  "Vedika Joshi",
  "Vidya Kapoor",
  "Vikas Singh",
  "Vishal Malhotra",
  "Aditya Patel",
  "Alia Verma",
  "Aman Kumar",
  "Aria Khanna",
  "Arya Agarwal",
  "Ashish Mehta",
  "Ayush Choudhury",
  "Dev Bansal",
  "Ekta Tiwari",
  "Gagan Sharma",
  "Ishaan Yadav",
  "Juhi Kapoor",
  "Kunal Malhotra",
  "Lavanya Mehra",
  "Manoj Verma",
  "Mira Joshi",
  "Muskaan Patel",
  "Naman Khanna",
  "Nandini Yadav",
  "Nidhi Agarwal",
  "Pankaj Singh",
  "Payal Bansal",
  "Pranav Tiwari",
  "Priyanka Sharma",
  "Rajat Kumar",
  "Ritika Verma",
  "Roshan Choudhury",
  "Ruchika Patel",
  "Sanya Khanna",
  "Shiv Mehra",
  "Sonakshi Joshi",
  "Sumit Malhotra",
  "Urmila Singh",
  "Vipul Agarwal",
  "Yash Bansal",
  "Zoya Tiwari",
  "Anshul Gupta",
  "Anushka Mehra",
  "Devanshi Patel",
  "Gurpreet Singh",
  "Harleen Kaur",
  "Jagdeep Verma",
  "Jyoti Sharma",
  "Karan Malhotra",
  "Kiran Yadav",
  "Neeraj Tiwari",
  "Parul Mehta",
  "Raghav Choudhury",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const textList = [
  "Hello everyone! 😊",
  "How's it going? 👋",
  "I love this live chat feature! ❤️",
  "What's your favorite emoji? 😄",
  "Great video! 👍",
  "Let's chat about the topic. 💬",
  "This chat is on fire! 🔥",
  "Hi from India! 🇮🇳",
  "Any questions for the host? ❓",
  "Share your thoughts! 💭",
  "Thumbs up for the presenter! 👍👍",
  "Who's excited for the next segment? 🙌",
  "Let's keep the conversation going! 💬",
  "Amazing content! 🌟",
  "Shoutout to the host! 📣",
  "I'm enjoying this chat so much! 😄❤️",
  "What's on your mind? 💭",
  "Don't forget to like and subscribe! 👍",
  "Cheers to a great discussion! 🥂",
  "Any emoji enthusiasts here? 😃🎉",
  "Let's make this chat lively! 💃🕺",
  "Thanks for joining us! 🙏",
  "Smile, it's contagious! 😃",
  "Feeling inspired today! 💡",
  "The chat's buzzing! 🐝",
  "Happy chatting, everyone! 🎉",
];

export function generateRandomText() {
  return textList[Math.floor(Math.random() * textList.length)];
}
