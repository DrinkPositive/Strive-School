<html>
  <!--
        You have been assigned to the creation of a Smartphone Shop Website.
        The shop is just a showcase of the products of the shop with some extra informations.
        No shopping cart / checkout features are required.
        EX1.:
        Add H1 title with the name of the shop
        EX2.: 
        Add a TABLE with the top 5 products of the shop
        EX3.: 
        Each product should have one image, title, description and price
        EX4.:
        Add Map to the shop 
        EX5.: 
        Add the links to Amazon products for each item in the table
        EX6.: completed in ex.3
        Add a footer with the address and the name of the shop
        EX7.: 
        Add a message board where the user can type a message in it (only client side)
        // EXTRA 
        EX8.: 
        Write a function to change the heading text
        EX9.: document.getElementById("h1").innerHTML = "yeet!";
        Write a function to change the page background color
        EX10.: document.body.style.backgroundColor = "Black";
        Write a function to change the footer address with a fake one
    -->
    

  <head><style>
    th{
        text-align:left !important;
    }
    footer{ height: 190px; 
    background-color: EDB6A3;
    color: black;
    margin-top: 150px;
    text-align: center;
}
    </style>

        <title>Strivezon</title>
        
        <h1>Shop </h1>
        
        <div style="width: 100;">
          
       </div>
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
      <td> <img src="" width="190" height="100" alt="banana"></td>
      <td>$299</td>
      <td><p>newly genetically modified banana <br>Buy it now link below</p></td>
      <td><a href="" target="_blank">Banan!</a></div></td>
    </tr>
    <tr>
      <td>Strawberry</td>
      <td><img src="" width="200" height="100" alt="srs"></td>
      <td>$29,99</td>
      <td><p>A cool Strawberry<br>Buy it now link below</p></td>
      <td><a href=""  target="_blank">berry!</a> </td>
    </tr>
    <tr> 
      <td>Blueberry</td>
      <td><img src="" width="190" height="100" alt="alternatetext"></td>
      <td>$19</td>
      <td><p></p><br>Buy it now link below</td>
      <td><a href="https://www.w3schools.com" target="_blank">Blueberry!</a> </td>
    </tr>
    <tr>
      <td>Orange</td>
      <td><img src="" width="190" height="100" alt=""></td>
      <td>$3</td>
      <td><p>I was lazy to type so here is sample text<br>Buy it now link below</p></td>
      <td><a href=""  target="_blank">orange!</a> </td>
    </tr>
    <tr>
      <td>Apple</td>
      <td><img src="" width="190" height="100" alt=""></td>
      <td>$1400</td>
      <td><p>an Apple from Apple<br>Buy it now link below</p></td>
      <td><a href="" target="_blank">air!</a> </td>
    </tr>
  </table>

  
  <div id="googleMap" style="width:100%;height:420px; margin-top: 20px;">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.296300049342!2d5.565680036581373!3d50.63585057635196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa0b816699d7%3A0x76a9dddbdf15cc40!2sMontagne%20de%20Bueren!5e0!3m2!1sde!2sde!4v1601905804111!5m2!1sde!2sde" width="300" height="300" frameborder="1" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"><br></iframe>
  </iframe>
</div>
  
<h2>Contact us</h2>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" placeholder="Your Name"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" placeholder="Your Last Name"><br><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email" placeholder="Your E-Mail"><br><br>
  <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write us a message"
              ></textarea>
  <input type="submit" value="Submit" onclick="clicked(event)">
  
  
</form> 

  <script>

type="submit">
    function clicked() {
       if (confirm('Do you want to submit?')) {
           yourformelement.submit();
       } else {
           return false;
       }
    }
    
      document.body.style.backgroundColor = "EDB6A3";


      document.getElementById("Shop").innerHTML = "";

    </script>
  
 
  </body>
  <footer>
  </footer>
  
</html>