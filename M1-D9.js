<!DOCTYPE html>
<html>
  <style>
    .container {
      display: flex;
    }

    .table {
      border-left: 1px solid #000000;
      border-top: 1px solid #000000;
    }

    .table:nth-child(5) {
      border-right: 1px solid #000000;
    }

    .cell {
      width: 50px;
      height: 50px;
      border-bottom: 1px solid #000000;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  </style>
  <!--
        BINGO CHALLENGE!!!
        Create programmatically (with JS) a BINGO board with 76 cells, from 1 to 76.
        Create a button to randomize a number from 1 to 76. The same number should be highlighted on the bingo board
        EXTRA: 
        - Take ALWAYS a new number (avoid randoming 10 3 times for example)
        - Create a USER BOARD with random 24 numbers that highlights as the main board does
        - Let the user choose HOW MANY user boards he's willing to play with and create them.
    -->

  <body>
    <button id="btn">Button</button>
    <div class="container">
      <div class="table">
        <div id="cell" class="cell"></div>
        <div id="cell" class="cell"></div>
        <div class="cell"></div>
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

      <div class="table">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
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

      <div class="table">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </div>
  </body>

  <script>
    for (var i = 0, number = []; i < 76; i++) {
      number[i] = i;
    }

    // randomize the array
    number.sort(function () {
      return Math.random() - 0.5;
    });

    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
      let newTr = document.createElement("tr");
      newTr.innerText = number[1];
      document.getElementById("cell").appendChild(newTr);
    });

    const showImagesButton = document.getElementById("btn");
    showImagesButton.onclick = (e) => {
      const images = document.getElementById("cell");
      for (let i = 0; i < images.length; i++) {
        images[i].innerText = number[i];
      }
    };
  </script>
</html>
