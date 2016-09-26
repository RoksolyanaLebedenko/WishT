window.onload = function () {
  var send = document.getElementById('input-message');

  send.onclick = function send(){
    emailjs.send("<wish_u>","<wish_u>",{name: "James", notes: "Check this out!"})
  .then(function(response) {
     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
  }, function(err) {
     console.log("FAILED. error=", err);
  });
    alert("Done!");
  };
}