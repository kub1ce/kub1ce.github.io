

function point(team = Number, pom = '+'){
    el = document.querySelector(`#t${team}S`);
    if (pom == '+'){
        el.innerHTML = String(Number(el.innerHTML) + 1);
    }else{
        el.innerHTML = String(Number(el.innerHTML) - 1);
    }
}

function editName(team){
    a = prompt('Укажите название команды ' + team, 'Team#'+team);
    document.querySelector('#t' + team + 'N').innerHTML = a;
}