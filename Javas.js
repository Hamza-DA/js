const inputContent = document.querySelector('#inputf')
const butn = document.querySelector('.plus-add')
const tasktlist = document.querySelector('.tasklist')
const binbtn = document.querySelector('.trash')
let id = 1;
butn.addEventListener('click', () => {
    if (valid()) {
        additem();
        console.log('click is good'); 
    }
});
inputContent.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && valid()){
        additem();
        console.log('key is good');
    }
});
function additem() {
    
    const element = document.importNode(templatei.content, true)
    const chekbox = element.querySelector("#chek");
    chekbox.id = id;
    const label = element.querySelector('label');
    label.htmlFor = id;
    label.append(inputContent.value)
    tasktlist.appendChild(element);
    inputContent.value = '';
    id++
}
binbtn.addEventListener('click', () => {
    const tasks = document.querySelector('.task');
    tasks.forEach((task) => {
        const checked = task.querySelector("#chek").checked;
        if (checked) {
            task.remove();
        }
    });
});
function valid() {
    return inputContent.value !== ''
}

const dbn = document.querySelector('.dbtn')
const rbn = document.querySelector('.rbtn')
const ibn = document.querySelector('.ibtn')
let numberc = document.querySelector('#numid')

number = 0;

dbn.addEventListener('click', () => {
    minnum();
    numberc.innerHTML = number;
    if (number < 0) {
        numberc.style.color = "#ff6b6b"
    }
    })

function minnum() {
     number--;
}

ibn.addEventListener('click', () => {
    addnum();
    numberc.innerHTML = number;
    if (number > 0) {
        numberc.style.color = "#a7c957"
    }
    })

function addnum() {
     number++;
}
rbn.addEventListener('click', () => {
    resetnum();
    numberc.innerHTML = number;
    if (number = 0) {
        numberc.style.color = "#a4c3b2"
    }
})
    function resetnum() {
        number = 0;
   }
   