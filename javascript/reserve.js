// Select the save button
var button = document.querySelector(".btn-save");
// Select the input box
var siteName = document.querySelector("[name='web-name']");
var url = document.querySelector("[name='url']");
var category = document.querySelector("[name='category']");
var description = document.querySelector("[name='description']");

// Select the <div> with class="bookmarks"
var bookmarksSection = document.querySelector(".bookmarks1");

// Hold bookmarks in local storage
if(typeof(localStorage.bookmark) == "undefined"){
localStorage.bookmark = "";
}
// listen for form submit

button.addEventListener("click", function(e){

    // Prevent the page from reloading when submitting the form
    e.preventDefault();
    
    let patterURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    
    let arrayItems, check = false, adr, itemAdr;
    console.log(category, category.value, description, description.value)
    // Validation of form and URL
    if(siteName.value === ""){
        alert("you must fill the siteName input");
    } else if(url.value === ""){
        alert("you must fill the url input");
    } else if(!patterURL.test(url.value)){
        alert("you must enter a valid url");
    }
    else if(category.value===""){
        alert('Category should be given')
    }
    else if(description.value===""){
        alert('Description should be given')
    }
    else{
        
        arrayItems = localStorage.bookmark.split(";");
        adr = url.value;
        adr = adr.replace(/http:\/\/|https:\/\//i, "");
        arrayItems.length--;
            
        // Check if website is already bookmarked
        for(item of arrayItems){
            itemAdr = item.split(',')[1].replace(/http:\/\/|https:\/\//i,"");
            if(itemAdr == adr){
            check = true;
            }
        }
            
        if(check == true){
            alert("This website is already bookmarked");
        }
        else{
            
            // If all checks are correct,add bookmark to local storage
            localStorage.bookmark += `${siteName.value},${url.value},${category.value}, ${description.value} ;`;
            // addBookmark(siteName.va lue, url.value, category.value, description.value);
            console.log(`${siteName.value},${url.value},${category.value}, ${description.value} ;`)
            siteName.value = "";
            url.value = "";
            category.value="";
            description.value="";
            fetchBoookmark();
        }
    }
    });
function fetchBoookmark(){
    if(typeof(localStorage.bookmark) != "undefined" && localStorage.bookmark !== ""){
        let fetchedBookmarks={};
        let arrayItems = localStorage.bookmark.split(";");
        arrayItems.length--;
        for(let data of arrayItems){
        let [nameValue, urlValue, categoryValue, descriptionValue] = data.split(',');
        if(fetchedBookmarks[categoryValue]){
            fetchedBookmarks[categoryValue].push({
                name: nameValue,
                url: urlValue,
                description:descriptionValue
            })
        }else{
            fetchedBookmarks[categoryValue]=[{
                name: nameValue,
                url: urlValue,
                description:descriptionValue
        }]
    }
        }
        console.log(fetchedBookmarks)
        let item="";
        for(let key in fetchedBookmarks){
            item+=`<h2 style="color:blue">${key}</h2>`;
            for(let object of fetchedBookmarks[key]){
                 item += `<div class="bookmark">
        <span >${object.name}</span>
        <p class="descrip">${object.description}</p>
        <a class="visit" href="${object.url}" target="_blank"
            data-link='${object.url}' >Visit</a>
        <a onclick="removeBookmark(this)"
            class="delete" href="#" style="text-decoration: none;">remove</a>
    

        </div>
        
        `;    
            }

        }
bookmarksSection.innerHTML = item;
    }
    }
    fetchBoookmark();
// Function to remove the bookmark

function removeBookmark(thisItem){
    let arrayItems = [],
        index,
        item = thisItem.parentNode,
        itemURL = item.querySelector(".visit").dataset.link,
        itemName = item.querySelector("span").innerHTML;
    arrayItems = localStorage.bookmark.split(";");
        
    for(i in arrayItems){
        if(arrayItems[i] == `${itemName},${itemURL}`){
        index = i;
        break;
        }
    }
        
    //update the localStorage
    index = arrayItems.indexOf(`${itemName},${itemURL}`);
    arrayItems.splice(index,1);
    localStorage.bookmark = arrayItems.join(";");
        
    //update the bookmark Section
    bookmarksSection.removeChild(item);
    }             