
let userId: number;
let userName: string;
let isActivated: boolean;
let fullText: string;


userId = 1;
userName = "zamba";
isActivated = false;

fullText = userName.concat(userName);

console.log(
  `your name is ${userName} and your id is ${userId} and your account is ${
    isActivated ? "activated" : "deactivated"
  } and your full name is ${fullText}`
);
