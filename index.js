<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="index.css" />
    <style>
      .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 500px;
        width: 600px;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div id="userinput">
      <div id="logo">Weather<span>4</span>Cast</div>
      <div>
        <input type="text" name="" id="city" placeholder="Enter City" />
        <button id="search">Search</button>
      </div>
    </div>

    <div id="liveLocation">
      <button id="live">My Location</button>
    </div>
    <div id="cont">
      <div id="data"></div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>

    <div id="forecast"></div>
  </body>
</html>
<script src="index.js"></script>
