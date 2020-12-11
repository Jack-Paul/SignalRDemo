

var connection = new signalR.HubConnectionBuilder().withUrl("/signalRhub").build();


document.getElementById("send").disabled = true;

connection.on("RecieveMessage", function (message) {
    var li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messageList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("send").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("send").addEventListener("click", function (event) {
    var message = document.getElementById("message").value;
    connection.invoke("sendMessage", message);
    event.preventDefault();
});