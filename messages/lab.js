function parse() {
     r = new XMLHttpRequest();
     r.open ("GET", "data.json", true);
     r.onreadystatechange = function() {
          if (r.readyState == 4) {
               messagesDiv = document.getElementById("messages");
               converted = JSON.parse(r.responseText);
               for (i = 0; i < converted.length; i++) {
                    messagesDiv.innerHTML += "<p>" + converted[i]['content'] + " " + converted[i]['username'] + "</p>";
               }
          }
      }
      r.send();
}


