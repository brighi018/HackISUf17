

var opt1 = document.getElementById('option1').checked;
var opt2 = document.getElementById('option2').checked;
var opt3 = document.getElementById('option3').checked;
var opt1 = document.getElementById('option4').checked;
var opt2 = document.getElementById('option5').checked;
var opt3 = document.getElementById('option6').checked;
var opt1 = document.getElementById('option7').checked;
var opt2 = document.getElementById('option8').checked;
var opt3 = document.getElementById('option9').checked;
var opt1 = document.getElementById('option10').checked;

var options = [opt1, opt2, opt3];
var path = new Array();

for (i = 0; i < options.length; i++) {
  if (options[i] == 0) {
    path.push(options[i]);
  }
}



function displayPath() {
                /*
                var e = document.getElementById("ID");
                var NumOfRepititions = e.options[e.selectedIndex].value;
                */

                var out = "";
                var img = null;
                for (var i = 1; i <= path.length; i++) {
                  switch(i) {
                    case 1:
                      img = img1.jpg;
                      text = "img4 caption"
                      break;
                    case 2:
                      img = img2.jpg;
                      text = "img4 caption"
                      break;
                    case 3:
                      img = img3.jpg;
                      text = "img4 caption"
                      break;
                    case 4:
                      img = img4.jpg;
                      text = "img5 caption"
                      break;
                    case 5:
                      img = img5.jpg;
                      text = "img5 caption"
                      break;
                    case 6:
                      img = img6.jpg;
                      text = "img6 caption"
                      break;
                    case 7:
                      img = img7.jpg;
                      text = "img7 caption"
                      break;
                    case 8:
                      img = img8.jpg;
                      text = "img8 caption"
                      break;
                    case 9:
                      img = img9.jpg;
                      text = "img9 caption"
                      break;
                    case 10:
                      img = img10.jpg;
                      text = "img10 caption"
                      break;
                    default:
                      img = img0.jpg;
                      text = "default caption"
                    }
                  out = out + "<figure><img src="img" alt="text"/><figcaption>"+text+"</figcaption></figure>";
                  }
                }
                document.getElementById("OUTPUT ID").innerHTML = out;
            }
            <!-- OUTPUT ID needs to be the id of the span in the html file -->
