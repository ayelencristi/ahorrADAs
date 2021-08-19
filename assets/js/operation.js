var params = new URLSearchParams(window.location.search);
if (params.get('id')) {
}
// FUNCION ID´S OPERATION
var getIdOperation = function () {
    if (lstorage.operations.length > 0) {
        var lastItem = lstorage.operations[lstorage.operations.length - 1];
        return lastItem.id + 1;
    }
    else {
        return 1;
    }
};
//FUNCION CARGAR SELECT DE CATEGORIES
var selectCatOperations = document.getElementById('selectCategoriesOp');
loadForm(selectCatOperations);
// FUNCION CARGA OPERACIONES A LS
var formOperation = document.getElementById('form-operation');
var lstorage = getStorage();
var createOperation = function (e) {
    e.preventDefault();
    var form = e.target;
    var descriptionOP = form.descriptionOp.value;
    var categoriesOP = form.selectCategoriesOp.value;
    var dateOP = form.dateOp.value;
    var amountOP = form.amountOp.value;
    var typeOP = form.selectType.value;
    var newOp = {
        id: getIdOperation(),
        description: descriptionOP,
        categories: categoriesOP,
        date: dateOP,
        amount: amountOP,
        type: typeOP
    };
    lstorage.operations.push(newOp);
    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
};
formOperation.addEventListener('submit', createOperation);
