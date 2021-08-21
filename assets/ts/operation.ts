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

loadCategoriesSelect(selectCatOperations);


// FUNCION CARGA OPERACIONES A LS

const formOperation = document.getElementById('form-operation');

let lstorage = getStorage();


// 1 - crear una funcion getCategory
// 2 - La funcion recibe Id
// 3 - buscar en el array de cateogrias la que coincida con el ID
// 4 - retornar el obejto completo. ej: { id: 1, name: 'Comida' }
const getCategory = (selectCat) => {
    for (const Category of lstorage.categories) {
        if (selectCat === Category.id) {
            return Category
            
        }
        console.log(Category.id)
    } 
console.log(selectCat)
}

const createOperation = (e) => {
    e.preventDefault();

    const form = e.target;

    const descriptionOP: string = form.descriptionOp.value;
    const categoriesOP: Category = getCategory(form.selectCategoriesOp.value);
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
refresh();
}
formOperation.addEventListener('submit', createOperation);

