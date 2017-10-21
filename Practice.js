
function displayPath() {

    document.getElementById('updatePath').innerHTML = "hi";
    document.getElementById("pathSpan").innerHTML = "good bye";

    var path = [document.getElementById('NY').checked,
                document.getElementById('doggo').checked,
                document.getElementById('yoga').checked,
                document.getElementById('bubbleWrap').checked,
                document.getElementById('pillowFort').checked,
                document.getElementById('declutter').checked,
                document.getElementById('bobRoss').checked,
                document.getElementById('craft').checked];
    out = "";
    for(i = 0; i < path.length; i++) {
      out = path.join(" ");
    }
    document.getElementById("pathSpan").innerHTML = out;

    var out = "";
    var img = "";
    var text = "";
    for (var i = 0; i < path.length; i++) {
      if (path[i]) {
        document.getElementById('pathSpan').innerHTML = '<p>'+i+'</p>';
        switch(i) {
          case 0:
            img = "images/NY.jpeg";
            text = "img0 caption";
            break;
          case 1:
            img = "images/doggo.jpeg";
            text = "img1 caption";
            break;
          case 2:
            img = "images/yoga.jpeg";
            text = "img2 caption";
            break;
          case 3:
            img = "images/bubbleWrap.jpg";
            text = "img3 caption";
            break;
          case 4:
            img = "images/pillowFort.jpg";
            text = "img4 caption";
            break;
          case 5:
            img = "images/declutter.jpeg";
            text = "img5 caption";
            break;
          case 6:
            img = "images/bobRoss.jpeg";
            text = "img6 caption";
            break;
          case 7:
            img = "images/craft.jpeg";
            text = "img7 caption";
            break;
        default:
          img = "img0.jpg";
          text = "default caption";
        }
        out = out + " hi";
        //out = out + "<br><figure><img src=\""+img+"\" alt=\""+text+"\"/><figcaption>"+text+"</figcaption></figure>";
      }
    }
    document.getElementById("pathSpan").innerHTML = out;
}
