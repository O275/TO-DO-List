// this is to make line through items when checked
 function toggleTaskCompletion(event) {
   const listItem = event.target.parentNode;
       listItem.classList.toggle('crossed-out');
   };


// this is to add new items
function addNewItem() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("addTo").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("addTo").value = "";

  // this creates and appends the checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener('change', toggleTaskCompletion);
  li.insertBefore(checkbox, li.firstChild);

  const submit = document.createElement("submit");
  const txt = document.createTextNode("\u00D7");
  submit.className = "close";
  submit.appendChild(txt);
  li.appendChild(submit);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
};

// this is to create the "x" and add it to items
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var submit = document.createElement("submit");
  var txt = document.createTextNode("\u00D7");
  submit.className = "close";
  submit.appendChild(txt);
  myNodelist[i].appendChild(submit);
};

// this is to close out items when "x" is pressed
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
};

// /*{ <input type="text" id="addTo" placeholder="Add To Do">
//   <input type="submit" onclick="addNewItem()" value="Add More Stuff">



// const inputbox = document.getElementById("input-box);
// const myUl = document.getElementById("list-container");

// function addTask(){
//     if(inputbox.value === ''){
//         alert("you must write something");
//     }
//     else{
//         let li = document.createElement("li);
//         li.innerHtml = inputBox.value;
//         listContainer.appendChild(li);
//     }
// } }