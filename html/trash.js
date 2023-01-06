
// while(state == 1){
// let gname = JSON.parse(localStorage.getItem('stone')).name;
// let ggender = JSON.parse(localStorage['stone']).gender


// check.innerHTML += `<div id="results">
//             <h3>character number:<b id="number">${i}</b><h3>
//             <h2><u>Name</u>:${gname}</h2>
//             <h2><u>Age</u></b>:${ggender}</h2>
//             <button class="btn2" id="more"><a href="resultpage.html">read more</a></button>
//             </div>`;
// console.log(ggender);
// paragraph.innerHTML = ggender;
// }

// more.addEventListener('click',() =>{
//     state = 1;
// })

    // fetch('https://swapi.dev/api/people')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.results); // array of characters
    // })
    // .catch(error => {
    //   console.error(error);
    // });


    //btn2.addEventListener('click',() =>{
    //     console.log("button clicked" + i);
    //     if(i>1)
    //     {
    //     i = i - 1;
    //     }
    //     fetch('https://swapi.dev/api/people/' + i + '/')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             // paragraph.innerHTML = `<p>hellooo</p>`;
    //             character.innerHTML = `<h3>character number:<b id="number">${i}</b><h3>
    //             <h2><u>Name</u>:${data.name}</h2>
    //             <h2><u>Age</u></b>:${data.birth_year}</h2>
    //             <button class="btn2"><a href="resultpage.html">read more</a></button>`;
    //         })
    // })








    // const btn = document.getElementById("btn1");
// const character = document.getElementById("resultcontainer");
// const check = document.getElementById("check");
// const paragraph = document.getElementById("gname");
// const btn2 = document.getElementById("btn2");
// const more = document.getElementById("more");
// var str = '1';
// var i = 0,state = 0;
// btn.addEventListener('click', () => {
//     // console.log("button clicked" + i);
//     i = i + 1;
//      fetch('https://swapi.dev/api/people/' + i + '/') 
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data.name);
//             let store = JSON.stringify(data)
//             localStorage.setItem('stone',store);
//             character.innerHTML += `<div id="results">
//             <h3>character number:<b id="number">${i}</b><h3>
//             <h2><u>Name</u>:${data.name}</h2>
//             <h2><u>Age</u></b>:${data.birth_year}</h2>
//             <button class="btn2" id="more"><a href="resultpage.html">read more</a></button>
//             </div>`;
//         })
// })








// let Name,Gender,Height,Mass,Skincolor,Eyecolor;
// Name = JSON.parse(localStorage.getItem('stone')).name;
// Height = JSON.parse(localStorage.getItem('stone')).height;
// Gender = JSON.parse(localStorage.getItem('stone')).gender;
// Mass = JSON.parse(localStorage.getItem('stone')).mass;
// Skincolor = JSON.parse(localStorage.getItem('stone')).skin_color;
// Eyecolor = JSON.parse(localStorage.getItem('stone')).eye_color;