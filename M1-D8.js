<!DOCTYPE html>
<!--
ASSIGNMENT RULES
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- To test the page, just open it with your default browser.
ASSIGNMENT TOPIC
You are building a task list site.
The have a list of tasks and can, at any time, add a new one, delete one or sort the whole bunch of them
-->
<html lang="en">
  <head>
    <!-- EXERCISE 1:
    Specify the title, the charset (UTF-8) and the viewport of the page.
    -->
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>Task list</title>
    <meta charset="UTF-8" />
    <style>
      /* EXERCISE 2:  
       Create a CSS class for the task list with a diverse background
       Create a CSS class for the task list item with a border, a bold text and a bigger font size
       Style every button of the page to be bigger
    */

      #newTask {
        width: 20%;
        margin: 15px;
      }
      #myTaskList {
        padding: 20px;
        width: 100%;
      }
      input[type="button"] {
        font-size: 20px;
      }
      .myTaskList {
        font-weight: bold;
        border: 1px solid #000000;
        font-size: 25px;
      }
      ul {
        list-style-type: none;
        padding-inline-start: 0px;
      }

      body {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      #colorPicker {
        width: 100px;
        margin: 10px;
      }

      input {
        width: 30%;
      }

      input[type="button"] {
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to your personal Task List!</h1>
    <br />

    <span
      >You can add any task you like by writing it in the specified field and
      then press "Add new task"</span
    ><br /><br />

    <input type="text" placeholder="Type text here" id="newTask" />
    <input type="button" id="btn" value="Add new Task" onclick="" />
    <input type="button" id="btn2" value="Remove Last Task" onclick="" />
    <input type="button" id="btn3" value="Remove First Task" onclick="" />
    <input
      type="button"
      id="btn3"
      value="Print As Array"
      onclick="getTasksAsArray()"
    />

    <!-- EXERCISE 3
        Create a button "Remove Last Task" to trigger the method "removeLast"
        -->

    <!-- EXERCISE 4
        Create a button "Remove First Task" to trigger the method "removeFirst"
        -->

    <ul id="myTaskList"></ul>

    <hr />

    <input type="color" placeholder="Color" id="colorPicker" />
    <input
      type="button"
      value="Change task background"
      onclick="changeTaskBackgroundColor()"
    />

    <hr />

    <input type="button" value="Sort" onclick="bubblesort()" />

    <script>
      /* EXERCISE 5:
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */

      const btn = document.getElementById("btn");

      btn.addEventListener("click", () => {
        var newLi = document.createElement("li");
        var value = document.getElementById("newTask").value;
        newLi.innerHTML = value;
        document.getElementById("myTaskList").appendChild(newLi);
      });

      /* EXERCISE 6:
                Create a method "removeLast" which removes the last item from the task list
            */

      const btn2 = document.getElementById("btn2");

      btn2.addEventListener("click", () => {
        var last = document.querySelector("ul");
        last.lastChild.remove();
      });

      /* EXERCISE 7:
                Create a method "removeFirst" which removes the first item from the task list
            */

      const btn3 = document.getElementById("btn3");

      btn3.addEventListener("click", () => {
        document.querySelector("li").remove();
      });

      /* EXERCISE 8:
               Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
            */

      function getTasksAsArray() {
        let newLi = document.querySelectorAll("li");
        let newArray = [];

        for (let i = 0; i < newLi.length; i++) {
          newArray.push(newLi[i].innerText);
        }
        newArray = newArray.join(" ");
        console.log(newArray);
      }

      /* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an
               onchange event listener ad applies it as background to every list item
            */

      changeTaskBackgroundColor = () => {
        var color = document.getElementById("colorPicker").value;
        document.getElementById("myTaskList").style.background = color;
      };

      /* EXTRA */

      /* EXERCISE 10:
               Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm

               Use your spare time to beautify your task list with CSS.
               Suggestion:
               - Break the code into many function for semplicity
               - Reuse the functions previously created
            */
    </script>
  </body>
</html>
