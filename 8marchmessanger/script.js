
function sndmsg(){
    if (document.querySelector('textarea').value == ''){
        alert('Пожалуйста, заполните поля ввода сообщения!')
    } else {
        document.querySelector('.messages-block').innerHTML = document.querySelector('.messages-block').innerHTML + `<div class="msg"><p> <img src="https://media.discordapp.net/attachments/805425572092182568/1080893211922415648/4d4a3b8c-54fd-4fa8-902f-462ec2d982cb.png">Никита&nbsp;крутой!</p></div>`;
        document.querySelector('textarea').value = '';
    }
}