<?php
  include_once('templates/header.php');
  $pageID = "Oliwood";

?>

    <title><?php echo $pageID ?></title>

</head>

<body id="home" class="flex flexColumn">

  <header class="banner" role="banner">
    <div class="logo"><a href="#"><img src="img/Oliwood_logo_playful.png"/></a></div>
    <div class="bookNowContact">
      <p class="bookNow">Book Now</p>
      <p class="phone">403-394-3830</p>
      <p class="email">oliwood@telusplanet.ca</p>
    </div>
  </header>

    <div class="mobileMenu">Menu</div>

    <nav class="mainNav">
      <ul id="mainUL" class="flexRow">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#calendar">Availability</a></li>
        <li><a href="#rates">Rates</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
    </nav>    
  
  <main id="content" class="wrapper" role="main">
    <section class="promo">
      <p class="geoTagline">Located in beautiful Crowsnest Pass, Alberta, in the Canadian Rockies.</p>
      <img src="img/TurtleFromEast.jpg">
      <div class="whiteImgOverText">
        <div>Private Mountain Retreat</div>
        <div class="heroBullet">Sleeps up to 10</div>
        <div class="heroBullet">Large Hot Tub</div>
        <div class="heroBullet">Cable & WiFi</div>
      </div>
    </section>
    
    <section class="about">
      <div class="subNav" id="about">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>About</div>

      <h1>Comfortable mountainside cottage with incredible views of the Crowsnest Pass!</h1>
      <p>Enjoy all the Crowsnest Pass has to offer! Spring, summer, fall or winter there is always something to do in this fantastic area: hiking, quad-riding, bird watching, golfing, and the best fly fishing in the world. In winter, alpine, cross-country skiing, and snowmobiling. The house is cozy in winter with in-floor hot water heating. After a day of play in the great outdoors, curl up in front of the gas fireplace with a hot cocoa or languish in the luxurious hot-tub. It is located on the morning side of Turtle Mountain in the beautiful Crowsnest Pass.</p>

      <div class="subNav bgBrown">Amazing outdoor recreation opportunities</div>
      <h1>Skiing &bull; Skidooing &bull; Hiking &bull; Birdwatching</h1>

      <div class="hotTub">
        <img class="imgAbout" src="img/Hottub1.jpg"/>
        <div class="whiteImgOverText posHotTubText">
          <div>Party Hot Tub</div>
          <div>Seats Up To 7</div>
        </div>
      </div>
      <p id="self-catered">Oliwood is a self-catered accommodation, which simply means that you will not have to dress for breakfast and are free to lounge all day and take in the breathtaking beauty of nature out every window.</p>

    </section> 
    
    <section class="amenities">
      <div class="subNav" id="amenities">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>Facilities & Amenities
      </div>

      <article class="flex flexRow">
        <div id="kitchen" class="innerText flex flexColumn flexSpaceAround">
          <h2>Kitchen</h2>
          <p>The kitchen has cutlery, dishes, cooking utensils, pots and pans, microwave, stove, dishwasher and a large fridge with ice maker.</p>
          <p>Also has a BBQ, kettle, coffee maker and blender.</p>
          <h2>Laundry</h2>
          <p>Equipped with a washer, dryer and drying rack.</p>
        </div>
        <figure class="flex flexColumn flexSpaceAround">
          <img src="img/MKitch1.jpg">
        </figure>
      </article>

      <article class="flex flexRow">
        <figure class="flex flexColumn flexSpaceAround">
          <img src="img/MBed1.jpg">
        </figure>
        <div id="private" class="innerText flex flexColumn flexSpaceAround">
            <h2>Private Rooms</h2>
            <p>There are 2 large bedrooms with queen-size beds, 2 single beds in the den, a sofa bed and a futon. One ensuite bathroom has a shower and the main bathroom has a jetted tub.</p>
        </div>
      </article>

      <article class="flex flexRow">
        <div id="shared" class="innerText flex flexColumn flexSpaceAround">
          <h2>Shared<br/>Common Spaces</h2>
          <p>Comfortable living and dining room areas, as well as a large sunny deck with seating for entertaining and eating.</p>
          <p>Oliwood is suitable for sewing or quilting work-shops, artists, book clubs, star-gazers, or family get-togethers (with lots of room for campers), or those who simply wish a solitary retreat in the mountains.</p>
        </div>
        <figure class="flex flexColumn flexSpaceAround">
          <img src="img/MDeck1.png">
        </figure>
      </article>
      
    </section>
    
    <section>
      <div class="subNav" id="location">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>Location
      </div>
      <h3>Oliwood is located on the morning side of Turtle Mountain in the beautiful Crowsnest Pass, of Alberta's Rocky Mountains.</h3>

      <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m25!1m8!1m3!1d20696.740037265277!2d-114.379813!3d49.577144!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e0!4m3!3m2!1d49.5844959!2d-114.37593749999999!4m3!3m2!1d49.5697993!2d-114.385269!4m3!3m2!1d49.569812999999996!2d-114.3853194!5e0!3m2!1sen!2sca!4v1426133566552" width="70%" height="450" frameborder="0" style="border:0"></iframe>

      <img class="imgAbout" src="img/Winter.jpg"/>
    </section>
    
    <section class="calendar">
      <div class="subNav" id="calendar">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>Availability
      </div>
      <div id="calendar-legend"><div id="calendar-legend-box-booked">Booked</div><div id="calendar-legend-box-available">Available</div></div>
      
      <?php include_once("calendar.php"); ?>
    </section>
    
    <section class="rates">
      <div class="subNav" id="rates">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>Rates
      </div>      
      <h2>Prices include Taxes. Minimum 2 night stay. Maximum 10 people.</h2>
      <p>We accept both Visa and Mastercard. Check back for updates. Prices subject to change.</p>
      <article class="flex flexRow flexSpaceAround">
        <div class="season flex flexColumn flexSpaceAround">
          <div class="title">
            <h2>Low Season</h2>
            <p>Sep - Nov & Jan - Apr</p>
          </div>
          <div class="rateBox">
            <h3>DAILY:</h3>
            <p>$150.00 per night double occupancy</p>
            <p>$35.00 each additional person</p>
            <h3>WEEKLY:</h3>
            <p>$900.00 per week double occupancy</p>
            <p>$$210.00 each additional person</p>
            <p><span>(1 free night)</span></p>
          </div>
        </div>
        <div class="season flex flexColumn flexSpaceAround">
          <div class="title">
            <h2>High Season</h2>
            <p>May - Aug & Dec</p>
          </div>
          <div class="rateBox">
            <h3>DAILY:</h3>
            <p>$175.00 per night double occupancy</p>
            <p>$40.00 each additional person</p>
            <h3>WEEKLY:</h3>
            <p>$1050.00 per week double occupancy</p>
            <p>$240.00 each additional person</p>
            <p><span>(1 free night)</span></p>
          </div>
        </div>
      </article>
    </section>
    <section id="sectionContact">
      <div class="subNav" id="contact">
        <a href="#home" class="top"><img  src="img/upa.svg"/>Top</a>Contact Us
      </div>
      <p>Call or email to make your reservations.</p>
      <div class="preFooter flex flexRow">
        <div class="bookNowContact footerBookNowContact flex flexColumn">
          <p class="phone">403-394-3830</p>
          <p class="email">oliwood@telusplanet.ca</p>
        </div>
        <div class="footerLogoContainer flex flexColumn">
          <div class="logo"><a href="#"><img src="img/Oliwood_logo_playful.png"/></a></div>
          <div class="welcome">welcomes you!</div>
        </div>
      </div>
    </section>
  </main>
  <?php
    include_once('templates/footer.php');
  ?>
   
