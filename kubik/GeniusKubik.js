// Variables

// Functions

function change_module(value){//change module in module help
    document.querySelector('#MM').style.display = 'none';
    document.querySelector('#MY').style.display = 'none';
    document.querySelector('#MF').style.display = 'none';
    document.querySelector('#MR').style.display = 'none';
    document.querySelector('#MI').style.display = 'none';
    document.querySelector('#ME').style.display = 'none';
    document.querySelector('#MS').style.display = 'none';
    document.querySelector('#MCM').style.display = 'none';
    document.querySelector('#M' + value).style.display = 'block';
};

function change_naving(value){
    document.querySelector('#modules').style.display = 'none';
    document.querySelector('#news').style.display = 'none';
    document.querySelector('#info').style.display = 'none';
    document.querySelector('#' + value).style.display = 'block';
};

function edit_background(value){
    if(value == 'light'){
        document.body.style.background = 'none';
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        n = document.querySelector('#main');
        n.style.background = '#00000050';
        n.style.border = '2px solid #000';
        document.querySelector('#naving_nav').style.border = '2px black solid';
    }else if(value == 'dark'){
        document.body.style.background = 'none'
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#fff';
        n = document.querySelector('#main');
        n.style.background = '#ffffff50';
        n.style.border = '2px solid #fff';
        document.querySelector('#naving_nav').style.border = '2px white solid';
    }else{
        document.body.style.background = 'linear-gradient(to top, #693ABB, #C93ED3)';
        document.body.style.color = '#000';
        n = document.querySelector('#main');
        n.style.background = '#ffffff50';
        n.style.border = '2px solid #fff';
        document.querySelector('#naving_nav').style.border = '2px white solid';
    }
}