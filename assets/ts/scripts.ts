type LocalStorage = {
    categories?: Category[],
    operations?: Operation[]
}

type Operation = {
    description: string,
    categories: string,
    date: string,
    amount: number,
    type: "gasto" | "ganancia"
}

type Category = {
    id: number,
    name: string
}

const getStorage = (): LocalStorage => {
    let locStor: LocalStorage = JSON.parse(localStorage.getItem('ahorradas-data'));

    if(!locStor) {
       locStor = {
          categories: [],
          operations: [],
       } 
    }
 
    return locStor;
}







const init = () => {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
}

init();


// ------------ BOTON NUEVA OPERACION-----------

const btnNewOperation = document.getElementById('new-operation');
const divNewOperation = document.getElementById('div-new-operation');
const btnAddCategory = document.getElementById('btn-add-category');
const btnCancel = document.getElementById('btn-cancel');
const divMain = document.getElementById('div-main');



const tabNewOperation = () => {
    divMain.classList.add('d-none');
    divNewOperation.classList.remove('d-none');
}
btnNewOperation.addEventListener('click', tabNewOperation);


const closeTabNewOperation = () => {
    divMain.classList.remove('d-none');
    divNewOperation.classList.add('d-none');
}
btnCancel.addEventListener('click', closeTabNewOperation);




