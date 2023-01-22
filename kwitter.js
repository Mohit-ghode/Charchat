function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}