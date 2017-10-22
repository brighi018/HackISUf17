
function displayPath() {

    var path = [document.getElementById('NY').checked,
                document.getElementById('doggo').checked,
                document.getElementById('yoga').checked,
                document.getElementById('bubbleWrap').checked,
                document.getElementById('pillowFort').checked,
                document.getElementById('declutter').checked,
                document.getElementById('bobRoss').checked,
                document.getElementById('craft').checked,
                document.getElementById('Friends').checked,
                document.getElementById('hobby').checked,
                document.getElementById('notes').checked,
                document.getElementById('magazine').checked];

    //var textPath = path.join(" "); //this is a text version of an array!

    var out = "<br><br><p style=\"font-size: 30pt; color: orange; font-family: sans-serif, comic sans ms;\">Your customized path:</p>";
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
          case 8:
            img = "images/friends.jpeg";
            text = "Talk to a friend";
            break;
          case 9:
            img = "images/hobby.jpeg";
            text = "Practice a hobby";
            break;
          case 10:
            img = "images/notes.jpg";
            text = "Post positive reminders";
            break;
          case 11:
            img = "images/magazine.jpeg";
            text = "Throw out things that hold you back";
            break;
        default:
          img = null;
          text = null;
        }
        var checkhtml = "<input id=\""+img+"\" type=\"checkbox\" name=\"path\" value=\""+text+"\">";
        var texthtml = "Date completed: <input id=\""+img+"_date\" type=\"text\" size=\"10\">";
        var imghtml = "<figure>  <img width=\"500px\" height=\"350px\" src=\""+img+"\" alt=\""+text+"\"/>  <figcaption style='font-size:2em'>"+text+"</figcaption> </figure>"
        out = out + "<br> <p>" + checkhtml + '&emsp;' + texthtml + "</p>" + imghtml;
      }
    }
    document.getElementById("pathSpan").innerHTML = out;
    window.location.hash="pathSpan";
}
