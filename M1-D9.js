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

    .btn-col {
      text-align: center;
      width: 250px;
      margin-bottom: 10px;
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
    <div class="btn-col">
    <button id="btn">Button</button>
      </div>
    <div class="container">
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




      const btn = document.getElementById("btn");




      btn.addEventListener("click", () => {
          for (var i = 0, numbers = []; i < 25; i++) {
          numbers[i] = i;
        }
        numbers.sort(function () {
          return Math.random() - 0.5;
        });

        for (var i = 0; i < 25; i++) {


        }

            for (var i = 0; i < 25; i++) {
              secondDiv = document.createElement("div");
              secondDiv.classList.add("number");
              selectDivContainer = document.querySelectorAll('.cell');
              selectDivContainer[i].innerText = numbers[i];
            }
      });
          

  </script>
</html>
