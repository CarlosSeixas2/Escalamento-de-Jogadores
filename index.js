let btn_e = document.querySelector('#btn-e');
let btn_r = document.querySelector('#btn-r');

let divescala = document.querySelector('.container-escalar');
let divremove = document.querySelector('.container-remover');

btn_e.addEventListener('click', () =>{

    divescala.style.display = 'flex';
    divremove.style.display = 'none';
});

btn_r.addEventListener('click', () =>{

    divescala.style.display = 'none';
    divremove.style.display = 'flex';
});

var array = JSON.parse(localStorage.getItem('Database')) || [];

let btn_escalar = document.querySelector('#btn-escalar');
btn_escalar.addEventListener('click', () =>{

    let inputname = document.querySelector('#name').value;
    let inputnumber = document.querySelector('#number').value;
    let inputposition = document.querySelector('#position').value;

    let ul = document.querySelector('ul');

    array.push({
        jogador: inputname,
        camisa: inputnumber,
        posição: inputposition
    });

    // console.log(array);

    localStorage.setItem('Database', JSON.stringify(array)) ;
    JSON.parse(localStorage.getItem('Database'));

    ul.innerHTML = ''

    array.forEach((element) => {
        let li2 = document.createElement('li');
        
        li2.innerHTML = 'Jogador: ' + element.jogador + ' N°(' + element.camisa + ') ' + element.posição;
        li2.className = element.camisa;

        ul.appendChild(li2)
    });

    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('position').value = '';
});

let qtd = 0;
var new_array = []

let btn_remover = document.querySelector('#btn-remover');
btn_remover.addEventListener('click', () => {

    let num_remove = document.querySelector('#num-rmv').value;
    let li_remove = document.querySelectorAll('li');

    // array.forEach((element, index) => {
    //     if(element.camisa == num_remove){
    //         console.log(element)
    //         array.splice(index, 1);
    //         localStorage.setItem('Database', JSON.stringify(array));
    //     }
    // });

    array.filter((element) => {
        if(element.camisa != num_remove){
            new_array.push(element);
            localStorage.setItem('Database', JSON.stringify(new_array))
        }
    })

    li_remove.forEach((element) => {
        if(element.className == num_remove){
            element.remove();
        }
    });
});