function goToCreateRoom() {
    window.location.href = "createRoom.html";
}
function goToJoinRoom() {
    window.location.href = "joinRoom.html";
}
const createRoomBtn = document.getElementById("create-room-button")
createRoomBtn.addEventListener("click", goToCreateRoom);

const joinRoomBtn = document.getElementById("join-room-button")
joinRoomBtn.addEventListener("click", goToJoinRoom);

