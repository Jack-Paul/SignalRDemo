


window.onload = function () {
    var connect = document.getElementById("connect");
    if (connect) {
        connect.addEventListener("click", function (event) {
            var username = document.getElementById("usrname").value;
            window.location.replace("https://192.168.0.102:44327/home/ChatPage?username=" + username);
            //connection.invoke("connect", username);
            event.preventDefault();
        });
    }
}
