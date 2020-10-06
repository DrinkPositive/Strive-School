<html>
<head>
  <style>
body {
  margin:0;

}
th {
      text-align: left !important;
    }

.red-color {
  color:red;
    }
nav {
  background:#F4F4F4;
}
.todo ul{
    list-style-type: none;
    padding-inline-start:0px;!important;
}

nav h1 {
  margin-left: 50px;
  padding:30px;
}

.todo {
      display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hidden {
  display:none;
}

tr {
  border: 1px solid #000;
}

.container {
      display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: center;
}

table {
        display: flex;
      flex-direction: column;
    align-items: center;
    justify-content: center;
}

  </style>

  <title>Strive School - Shop</title>

<script src="app.js" defer></script>
<nav>
  <h1>Shop</h1>
</nav>
<div class="todo">
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


<button id="button">Button</button>
           </div>

           <div class="container">
  <table style="width:100%">
    <h2>Products</h2>

</head>

<body>
  
  <tr>
    <th>Title</th>
    <th>Image</th>
    <th>Price</th>
    <th>Description</th>
    <th>Link</th>
  </tr>
  <td>Banana</td>
  <td> <img src="https://www.computerhope.com/issues/pictures/creating-image-html.jpg" width="190" height="100" alt="banana"></td>
  <td>$299</td>
  <td>
    <p>newly genetically modified banana <br>Buy it now link below</p>
  </td>
  <td><a href="" target="_blank">Banan!</a></div>
  </td>
  </tr>
  <tr>
    <td>Strawberry</td>
    <td><img id ="img" src="https://www.computerhope.com/issues/pictures/creating-image-html.jpg" width="200" height="100" alt="srs"></td>
    <td>$29,99</td>
    <td>
      <p>A cool Strawberry<br>Buy it now link below</p>
    </td>
    <td><a href="" target="_blank">berry!</a> </td>
  </tr>
  <tr>
    <td>Blueberry</td>
    <td><img src="https://www.computerhope.com/issues/pictures/creating-image-html.jpg" width="190" height="100" alt="alternatetext"></td>
    <td>$19</td>
    <td>
      <p></p><br>Buy it now link below
    </td>
    <td><a href="https://www.w3schools.com" target="_blank">Blueberry!</a> </td>
  </tr>
  <tr>
    <td>Orange</td>
    <td><img src="https://www.computerhope.com/issues/pictures/creating-image-html.jpg" width="190" height="100" alt=""></td>
    <td>$3</td>
    <td>
      <p>I was lazy to type so here is sample text<br>Buy it now link below</p>
    </td>
    <td><a href="" target="_blank">orange!</a> </td>
  </tr>
  <tr>
    <td>Apple</td>
    <td><img src="https://www.computerhope.com/issues/pictures/creating-image-html.jpg" width="190" height="100" alt=""></td>
    <td>$1400</td>
    <td>
      <p>an Apple from Apple<br>Buy it now link below</p>
    </td>
    <td><a href="" target="_blank">air!</a> </td>
  </tr>
  </table>



  <h2>Contact us</h2>

  <form action="/action_page.php">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" placeholder="Your Name"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" placeholder="Your Last Name"><br><br>
    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email" placeholder="Your E-Mail"><br><br>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="Write us a message"></textarea>
    <input type="submit" value="Submit" onclick="clicked(event)">


  </form>


</body>
</div>
<footer>
</footer>

</html>