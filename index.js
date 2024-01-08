let username;

document.getElementById('submitButton').onclick = function(){
    username = document.getElementById('textbox').value;
    document.getElementById('usersName').textContent = 'Hello ' + username+' how are you today?';
}
