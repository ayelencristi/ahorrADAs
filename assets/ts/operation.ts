const params = new URLSearchParams(window.location.search);


if (params.get('id')) {

}

// FUNCION ID´S OPERATION

var getIdOperation = () =>{
    if (lstorage.operations.length > 0) {
        const lastItem = lstorage.operations[lstorage.operations.length - 1];
        return lastItem.id + 1;
    }else{
    return 1;
    }
}

//FUNCION CARGAR SELECT DE CATEGORIES

const selectCatOperations = document.getElementById('selectCategoriesOp');

loadForm(selectCatOperations);


// FUNCION CARGA OPERACIONES A LS

const formOperation = document.getElementById('form-operation');

let lstorage = getStorage();

const createOperation = (e) => {
    e.preventDefault();

    const form = e.target;

    const descriptionOP: string = form.descriptionOp.value;
    const categoriesOP: Category = form.selectCategoriesOp.value;
    const dateOP: string = form.dateOp.value;
    const amountOP: number = form.amountOp.value;
    const typeOP: string = form.selectType.value;

    const newOp: Operation = {
        id: getIdOperation(),
        description: descriptionOP,
        categories: categoriesOP,
        date: dateOP,
        amount: amountOP,
        type: typeOP,
    }
    lstorage.operations.push(newOp);
    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));

}
formOperation.addEventListener('submit', createOperation);

