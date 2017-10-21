displayPath() {

    var path = [document.getElementById('NY').checked,
                document.getElementById('doggo').checked,
                document.getElementById('yoga').checked,
                document.getElementById('bubbleWrap').checked,
                document.getElementById('pillowFort').checked,
                document.getElementById('declutter').checked,
                document.getElementById('bobRoss').checked,
                document.getElementById('craft').checked];

    //var textPath = path.join(" "); //this is a text version of an array!

    var out = "";
    var img = "";
    var text = "";
    for (var i = 0; i < path.length; i++) {
      if (path[i]) {
        switch(i) {
          case 0:
            img = "images/NY.jpeg";
            text = "Go on a vacation";
            break;
          case 1:
            img = "images/doggo.jpeg";
            text = "Volunteer at an animal shelter";
            break;
          case 2:
            img = "images/yoga.jpeg";
            text = "Try out a new yoga class";
            break;
          case 3:
            img = "images/bubbleWrap.jpg";
            text = "Pop bubble wrap";
            break;
          case 4:
            img = "images/pillowFort.jpg";
            text = "Build a pillow fort";
            break;
          case 5:
            img = "images/declutter.jpeg";
            text = "Declutter a room";
            break;
          case 6:
            img = "images/bobRoss.jpeg";
            text = "Paint with Bob Ross";
            break;
          case 7:
            img = "images/craft.jpeg";
            text = "Make a DIY project";
            break;
        default:
          img = null;
          text = null;
        }
        out = out + "<br><figure><img width=\"500px\" height=\"350px\" src=\""+img+"\" alt=\""+text+"\"/><figcaption>"+text+"</figcaption></figure>";
      }
    }
    document.getElementById("pathSpan").innerHTML = out;
}
