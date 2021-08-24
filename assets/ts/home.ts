// FUNCION CARGAR OPTIONS SELECT CATEGORIES

const selectCategories = document.getElementById('select-categories');


const loadForm = (s) => {
    const lstorage: LocalStorage = getStorage();

    // const selectCategories = document.getElementById('select-categories');

    for(const category of lstorage.categories) {
        const elem = document.createElement('option');
        elem.innerText = category.name;
        elem.value = category.id;
        s.appendChild(elem);
    }
}
loadForm(selectCategories);

/////////////////

// FUNCIÓN CARGAR TABLA DE OPERACIONES

const tableOperations = document.getElementById('operations');

const loadOperationTable = () => {
    const lstorage: LocalStorage = getStorage();

    // lstorage.operations.forEach((operation) => {
        for(const operation of lstorage.operations){
        const tr = document.createElement('tr');
        const tdDescription = document.createElement('td');
        const tdCategory = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdAmount = document.createElement('td');
        const tdAction = document.createElement('td');

        const editAction = document.createElement('a');
        const deleteAction = document.createElement('button');

        tdDescription.appendChild(document.createTextNode(operation.description));
        tdCategory.appendChild(document.createTextNode(operation.category.name));
        tdDate.appendChild(document.createTextNode(operation.date));
        tdAmount.appendChild(document.createTextNode(operation.amount));
        tdAction.appendChild(editAction);
        tdAction.appendChild(deleteAction);
        
        

        tr.appendChild(tdDescription);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tr.appendChild(tdAction);
        const tbody = tableOperations.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);
        
        // })
}
}
loadOperationTable();

// FUNCION MOSTRAR/OCULTAR TABLA DE OPERACIONES

const divImgHome = document.getElementById('div-img-home');
const divTableOperations = document.getElementById('div-table-operations');

const showTableOperation = () => {
    let lstorage: LocalStorage = getStorage();
    if (lstorage.operations.length >= 1){
        divImgHome.classList.add('d-none');
        divTableOperations.classList.remove('d-none');
        }
    }

showTableOperation();    


// FUNCION OPERACIONES BALANCE

// SUMAR GANANCIAS  = RECORRER LSTORAGE DE OP, IDENTIFICAR GANANCIAS Y GASTOS Y HACER TOTAL
// concatena en vez de hacer suma de números y los gastos también los suma en vez de restarlos, lo dejo comentado, descomentar para probarlo...

// const divGain = document.getElementById('div-gain');
// const divExpense = document.getElementById('div-expense');
// const divTotal = document.getElementById('div-total')

// const balance = () => {
//     let lstorage: LocalStorage = getStorage();

//     let totalGains = 0;
//     let totalExpense = 0;
//     let total = 0;


//     for (const operation of lstorage.operations) {
//         if (operation.type === 'ganancia') {
//             totalGains = totalGains + operation.amount;
//         } else if (operation.type === 'gasto') {
//             totalExpense = totalExpense + operation.amount;
//         }
//     }

//     total = totalGains - totalExpense;
    
//     divGain.innerHTML = totalGains;
//     divExpense.innerHTML = totalExpense;

//     if (total < 0) {
//         divTotal.innerHTML = `-$ ${-total}`;
//     } else{
//         divTotal.innerHTML = `$ ${total}`;
//     }

// }

// balance();










