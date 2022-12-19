
let user_login = document.getElementById("user_login");
let pass_login = document.getElementById("pass_login");
let tit_addblog = document.getElementById("tit_addblog");
let mess_addblog = document.getElementById("mess_addblog");
let em_contact = document.getElementById("em_contact");
let phon_contact = document.getElementById("phon_conatct");
let mess_contact = document.getElementById("mess_contact");
let success_contact = document.getElementById("success_contact");
let user_signup = document.getElementById("user_signup");
let em_signup = document.getElementById("em_signup");
let pass_signup = document.getElementById("pass_signup");
let conf_signup = document.getElementById("conf_signup");

let login_border = document.getElementById("bareas_login_user");




let validate_signup = () =>{

  if(document.myform.email_signup.value == ""){
    em_signup.innerHTML = "Enter valid email";
  }else{
    em_signup.innerHTML = "";
  }

if(document.myform.confirmp_signup.value == ""){
  conf_signup.innerHTML = "Confirm password";
}else{
  conf_signup.innerHTML = "";
}

if(document.myform.password_signup.value == ""){
  pass_signup.innerHTML = "Please enter Password";
}else{
 pass_signup.innerHTML = "";
}

if(document.myform.username_signup.value == ""){
  user_signup.innerHTML = "Please enter Username";
}else{
 user_signup.innerHTML = "";
}

if(document.myform.email_signup.value != "" && document.myform.username_signup.value != "" && document.myform.confirmp_signup.value != "" && document.myform.password_signup.value != ""){
  return true;
}else{
  return false;
}
}

let validate_contact = () =>{

  if(document.myform.email_contact.value == ""){
    em_contact.innerHTML = "Enter valid email";
  }else{
    em_contact.innerHTML = "";
  }

if(document.myform.phone_contact.value == ""){
  phon_contact.innerHTML = "Enter valid contact";
}else{
  phon_contact.innerHTML = "";
}

if(document.myform.message_contact.value == ""){
  mess_contact.innerHTML = "Please enter message";
}else{
  mess_contact.innerHTML = "";
}

if(document.myform.phone_contact.value != "" && document.myform.phone_contact.value != "" && document.myform.email_contact.value != ""){
  success_contact.innerHTML = "Sent Successful";
  return true;
}else{
  return false;
}
}

let validate_addblog = () =>{

if(document.myform.title_addblog.value == ""){
  tit_addblog.innerHTML = "Enter blog title";
}else{
  tit_addblog.innerHTML = "";
}
if(document.myform.message_addblog.value == ""){
  mess_addblog.innerHTML = "Enter blog description";
}else{
  mess_addblog.innerHTML = "";
}
if(document.myform.message_addblog.value != "" && document.myform.title_addblog.value != ""){
  return true;
}else{
  return false;
}
}

let validate_login = () =>{

if(document.myform.username_login.value == ""){
  user_login.innerHTML = "Please enter the user names";
  login_border.style.border = "2px solid red";
  // user_login.style.border = "5px solid red";
}else if(document.myform.username_login.value != "" && document.myform.username_login.value.length >= 5){
  login_border.style.border = "2px solid green";
  user_login.innerHTML = "";
}
if(document.myform.password_login.value == ""){
pass_login.innerHTML = "Please enter the password";
}else{
  pass_login.innerHTML = "";
}

if(document.myform.username_login.value != "" && document.myform.password_login.value != ""){
  return true;
}else{
  return false;
}
}

let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});