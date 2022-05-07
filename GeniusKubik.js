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

}