var userId;
var userName;
var isActivated;
var fullText;
userId = 1;
userName = "zamba";
isActivated = false;
fullText = userName.concat(userName);
console.log("your name is ".concat(userName, " and your id is ").concat(userId, " and your account is ").concat(isActivated ? "activated" : "deactivated", " and your full name is ").concat(fullText));
