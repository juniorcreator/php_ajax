window.onload = function () {


 let btn = document.querySelector('#show');
  btn.onclick = function () {
    ajaxGet('GET', 'ip.php', function (data) {
      document.getElementById("ip").innerHTML = data;
    });
    ajaxGet('GET', 'ip.php', function (data) {
      console.log(data);
    });
  };
};


//get ajax vanila js
function ajaxGet(method, url, cb) {
  var callback = cb || function (data){};

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      callback(this.responseText);

    }
  };

  request.open(method, url);
  request.send();

}