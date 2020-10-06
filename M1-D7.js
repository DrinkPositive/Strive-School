<!-- Starting from D6's exercise, use your Smartphone Shop Website and implement the following exercises-->
<script>
  /*EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
window.onload = function () { 
   alert("Hello")
};
  /* EXERCISE 2
      Write a function to change the Title of the page in something else (execute the function in browser console)
  */
  
document.title = "Strive School";
  
  /* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
  */
btn = () => {
document.querySelector("h1").classList.add("red-color");
};

  /* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
  */
  
btnOff = () => {
  document.querySelector("h1").classList.remove("red-color");
};

Or

const btn = document.getElementById("btn");

btn.addEventListener("mouseover", () => {
  document.querySelector("h1").classList.add("red-color");
});

btn.addEventListener("mouseout", () => {
  document.querySelector("h1").classList.remove("red-color");
});

  /* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>
  Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
  */


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector("div>p").innerText = "Test";
});


  /* EXERCISE 5
      Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
  */
  
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.className("listTitle").innerText = "Test";
});

  /* EXERCISE 6
       Write a function to add a new item ONLY to the second list (create an input field + add button)
  */
  
  const btn = document.querySelector("h1");

btn.addEventListener("mouseover", () => {
  let newLi = document.createElement("li");
  newLi.innerText = "Test";
  document.getElementById("secondList").appendChild(newLi);
});

  /* EXERCISE 7
      Write a function to make the first UL disappear (button)
  */
  
  
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.getElementById("firstList").remove("firstList");
});

  
  /* EXERCISE 8
      Write a function to make the background of every UL green (button)
  */
  
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector("ul").style.background = "green";
});

  /* EXERCISE 9
      Add a "magnifier function" to the table.
      When the user mouse goes on a table cell (not the image one) the font size must increase.
      HINT use mouseenter / mouseleave events
  */
  
const btn = document.querySelector("tr");

btn.addEventListener("mouseover", () => {
  document.querySelector("tr").style.fontSize = 50;
});

btn.addEventListener("mouseout", () => {
  document.querySelector("tr").style.fontSize = 20;
});

  
  /* EXERCISE 10
      Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
  */
  
const showImagesButton = document.getElementById("btn")
            showImagesButton.onclick = (e) => {
                const images = document.getElementsByTagName("img")
                for (let i = 0; i < images.length; i++) {
                    if (images[i].className.includes("hidden")) {
                        e.target.innerText = "Hide images"
                        images[i].classList.remove("hidden")
                    } else {
                        images[i].classList.add("hidden")
                        e.target.innerText = "Show images"
                    }
                }
            }

  //##### EXTRA

  /* EXERCISE 11
      Make the heading of the page change color radomly every time the user clicks on it
      */

const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  document.querySelector("h1").style.color = randomBg();
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

  /*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/
</script>