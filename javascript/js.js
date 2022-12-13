
let user_login = document.getElementById("user_login");
let pass_login = document.getElementById("pass_login");
let tit_addblog = document.getElementById("tit_addblog");
let mess_addblog = document.getElementById("mess_addblog");
let 

let validate_contact = () =>{

  if(document.myform.message_addblog.value == "" && document.myform.title_addblog.value == ""){
    console.log("nothing");
    tit_addblog.innerHTML = "Enter the blog title";
    mess_addblog.innerHTML = "Enter the blog description";
    return false;
  }
if(document.myform.title_addblog.value == ""){
  console.log("nothing");
  tit_addblog.innerHTML = "Enter blog title";
  return false;
}else{
  tit_addblog.innerHTML = "";
}
if(document.myform.message_addblog.value == ""){
  console.log("nothing");
  mess_addblog.innerHTML = "Enter blog description";
  return false;
}else{
  mess_addblog.innerHTML = "";
}
return true;
}

let validate_addblog = () =>{

  if(document.myform.message_addblog.value == "" && document.myform.title_addblog.value == ""){
    console.log("nothing");
    tit_addblog.innerHTML = "Enter the blog title";
    mess_addblog.innerHTML = "Enter the blog description";
    return false;
  }
if(document.myform.title_addblog.value == ""){
  console.log("nothing");
  tit_addblog.innerHTML = "Enter blog title";
  return false;
}else{
  tit_addblog.innerHTML = "";
}
if(document.myform.message_addblog.value == ""){
  console.log("nothing");
  mess_addblog.innerHTML = "Enter blog description";
  return false;
}else{
  mess_addblog.innerHTML = "";
}
return true;
}

let validate_login = () =>{

  if(document.myform.username_login.value == "" && document.myform.password_login.value == ""){
    user_login.innerHTML = "Please enter the user name";
    pass_login.innerHTML = "Please enter the password";
    return false;
  }
if(document.myform.username_login.value == ""){
  user_login.innerHTML = "Please enter the user name";
  return false;
}else{
  user_login.innerHTML = "";
}
if(document.myform.password_login.value == ""){
pass_login.innerHTML = "Please enter the password";
return false;
}else{
  pass_login.innerHTML = "";
}
return true;
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