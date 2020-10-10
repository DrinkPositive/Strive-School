<!DOCTYPE html>
<html>
  <body>
    <title>Tasks</title>

    <h1 id="h1">Tasks are:</h1>

    <button id="btn">Button</button>
    <div id="list">
      <ul></ul>
    </div>
    <ol>
      <li>Grill</li>
      <li>Baguette</li>
      <li>Chicken</li>
    </ol>
    <div class="imgs">
      <img
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shape_triangle.png"
      />
      <img
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shape_triangle.png"
      />
      <img
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shape_triangle.png"
      />
      <img
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shape_triangle.png"
      />
    </div>
    <button id="hide">Hide</button>
    <a href="strive.s">Play Bingo</a>

    <div id="container" class="container">
      <div class="table">
        <div id="cell" class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>

      <div class="table">
        <div class="cell"></div>
        <div class="cell"></div>
        <div id="2col" class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>

      <div class="table">
        <div class="cell"></div>
        <div class="cell"></div>
        <div id="nocell " class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>

      <div class="table">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>

    <td>1</td>
    <td>2</td>
    <td>3</td>

    <div id="container"></div>

    <script></script>
  </body>
  <!--
        HTML EXERCISES
        1) Create a title for the page
        2) Create a heading
        3) Create an ordered list
        4) Create a table with 5 columns and 4 rows
        5) Add an image to each second cell of every row
        6) Add a anchor link for every image
        7) Merge together 2 table cells
        8) Divide the page using a horizontal line
        9) Create a container with a nested paragraph and a nested unordered list
        10) Create a footer with some information about the page creator 
        CSS EXERCISES
        11) Give a maximum width to the body and center it in the page
        12) Set every h1 to be centered
        13) Change the color of each link in the page
        14) Create a class with a border
        15) Set table to have rounded corners
        16) Add margin between every paragraph
        17) Create a class which change font size and boldness
        18) Create a class to hide a content
        19) Add a green border to each td
        20) Add a dotted red border to each tr (note: tr does not accept a border property ;-) )
        JS EXERCISES
        21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
        DOM 
        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list
        EXTRA 
        41) Add an eventListener to alert when the mouse is over a link, displaying the URL
        42) Add a button to hide every image on the page
        43) Add a button to hide and show the table from the page
        44) Write a function to sum every number inside the TD (if the content is numeric)
        45) Delete the last letter from the title each time the user clicks on it
        46) Change a single TD background color when the user clicks on it
        47) Add a button DELETE, on click it should delete a random TD from the page
        48) Add a pink border to a cell when the mouse is over it
        49) Write a function to add a table with 4 rows and 3 columns programmatically
        50) Write a function to remove the table from the page
    -->

  <script>
  const showImagesButton = document.getElementById("hide");
  showImagesButton.onclick = (e) => {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      if (images[i].className.includes("hidden")) {
        e.target.innerText = "Hide images";
        images[i].classList.remove("hidden");
      } else {
        images[i].classList.add("hidden");
        e.target.innerText = "Show images";
      }
    }
  };


    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      let body = document.getElementById("container");
      let table = document.createElement("table");
      for (let x = 0; x < 4; x++) {
        let row = document.createElement("tr");
        for (let y = 0; y < 3; y++) {
          let cell = document.createElement("td");
          cell.innerText = y;
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      body.appendChild(table);
    });





    
  </script>

  <style>
    * {
      margin: 0;
    }

    .hidden {
      display: none !important;
    }
    h1 {
      text-align: center;
    }

    .imgs {
      display: flex;
    }
    body {
      width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    td {
      width: 50px;
      height: 50px;
      border: 1px solid #000000;
    }

    .imgs {
      height:256px;
      justify-content: center;
    }

    ol {
      padding: 30px;
    }

    #nocell {
      width: 0;
      height: 0;
    }

    button {
      margin: 10px;
    }

    #2col {
      width: 100px;
      height: 100px;
    }

    .table:first-child {
      border-top-left-radius: 10px;
    }
    .table:last-child {
      border-bottom-right-radius: 10px;
    }
    .table:first-child {
      border-top-right-radius: 10px;
    }
    .table:last-child {
      border-bottom-left-radius: 10px;
      border-bottom: 1px solid #000000;
    }

    .cell:nth-child(1) {
      border-right: 1px solid #000000;
    }
    .cell:nth-child(2) {
      border-right: 1px solid #000000;
    }
    .cell:nth-child(3) {
      border-right: 1px solid #000000;
    }
    .cell:nth-child(4) {
      border-right: 1px solid #000000;
    }

    .table {
      display: flex;
      border-top: 1px solid #000000;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
    }

    .cell {
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  </style>

  <!--
  
    21;
    var x = "John";
    var y = "Doe";
    console.log(x, y);
  
    22;
    var object = [
      (name = "John"),
      (surname = "Doe"),
      (email = "johndoe@gmail.com"),
    ];
  
    23;
    function splice() {
      object.remove(email);
    }
    console.log(object);
  
    24;
    var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    console.log(array);
  
    26;
    for (var i = 0, number = []; i < 100; i++) {
      number[i] = i;
    }
    number.sort(function () {
      return Math.random() - 0.5;
    });
  
    console.log(number);
  
    27;
    var min = Math.min(number);
    var max = Math.max(number);
  
    console.log(min, max);
  
    31;
    document.getElementById("ID");
  
    32;
    const td = document.querySelector("td");
    for (let i = 0; i < td.length; i++) {
      console.log(td++);
    }
  
    34;
  
    const btn = document.getElementById("btn");
  
    btn.addEventListener("click", () => {
      document.querySelector("h1").innerText = "Changed";
    });
  
    35;
    const btn = document.getElementById("btn");
  
    btn.addEventListener("click", () => {
      let newDiv = document.createElement("div");
      newDiv.className = "table";
      let parentDiv = document.getElementsByClassName("container");
      parentDiv.appendChild(newDiv);
    });
  
    36;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      const td = document.querySelector("cell");
      for (let i = 0; i < td.length; i++) {
        console.log(td++);
      }
      td.classList.add("test");
    });
  
    37;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      const td = document.querySelector("a");
      for (let i = 0; i < td.length; i++) { }
      td.classList.add("test");
    });
  
    38;
  
    window.onload = function load() {
      alert("Loaded");
    };
  
    39;
  
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      let newLi = document.createElement("li");
      newLi.innerText = "Test";
  
      document.querySelector("ul").appendChild(newLi);
    });
  
    40;
  
    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
      let newLi = document.querySelector("li");
      for (let i = 0; i < newLi.length; i++) {
        newLi.remove(i);
      }
    });
  
    41;
  
    const link = document.querySelector("a");
  
    link.addEventListener("mouseover", () => {
      var href = document.querySelector("a").href;
      alert(href);
    });
  
    42;
  
    const showImagesButton = document.getElementById("hide");
    showImagesButton.onclick = (e) => {
      const images = document.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        if (images[i].className.includes("hidden")) {
          e.target.innerText = "Hide images";
          images[i].classList.remove("hidden");
        } else {
          images[i].classList.add("hidden");
          e.target.innerText = "Show images";
        }
      }
    };
  
    43;
  
    const showImagesButton = document.getElementById("hide");
    showImagesButton.onclick = (e) => {
      const images = document.getElementById("container");
      if (images.className.includes("hidden")) {
        e.target.innerText = "Hide images";
        images.classList.remove("hidden");
      } else {
        images.classList.add("hidden");
        e.target.innerText = "Show images";
      }
    };
  
    44;
  
    function getTasksAsArray() {
      let newLi = document.getElementsByTagName("td");
      let newArray = [];
  
      for (let i = 0; i < newLi.length; i++) {
        newArray.push(newLi[i].innerText);
      }
      newArray = newArray.join(" ");
      console.log(newArray);
    }
  
    45;
  
    const btn = document.getElementsByTagName("h1");
    btn.addEventListener("click", () => {
      var last = document.querySelector("h1");
      last.lastChild.remove();
    });
  
    46;
  
    var str = document.getElementById("h1").innerText;
  
    str.addEventListener("click", () => {
      function str() {
        str.innerText = str.substring(0, str.length - 1);
      }
    });
  
    48;
  
    const btn = document.getElementsByClassName("cell");
  
    btn.addEventListener("mouseover", () => {
      document.getElementById("cell").style.background = "green";
    });
  
    const btn = document.getElementById("h1");
  
    btn.addEventListener("mouseover", () => {
      document.querySelector("h1").style.background = "green";
    });
  
    49;
    
    const btn = document.getElementById("btn");
  
    btn.addEventListener("click", () => {
      let newTr = document.createElement("tr");
      let newTd = document.createElement("td");
      document.getElementById("table").appendChild(newTr).appendChild(newTd);
    });
  
    50;
  
    const btn = document.getElementById("btn");
  
    btn.addEventListener("click", () => {
      document.getElementById("container").remove();
    });
  
  --->

</html>
