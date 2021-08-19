// FUNCION CARGAR OPTIONS SELECT CATEGORIES
var selectCategories = document.getElementById('select-categories');
var loadForm = function (s) {
    var lstorage = getStorage();
    // const selectCategories = document.getElementById('select-categories');
    for (var _i = 0, _a = lstorage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var elem = document.createElement('option');
        elem.innerText = category.name;
        elem.value = category.id;
        s.appendChild(elem);
    }
};
loadForm(selectCategories);
/////////////////
// FUNCIÓN CARGAR TABLA DE OPERACIONES
var tableOperations = document.getElementById('operations');
var loadOperationTable = function () {
    var lstorage = getStorage();
    // lstorage.operations.forEach((operation) => {
    for (var _i = 0, _a = lstorage.operations; _i < _a.length; _i++) {
        var operation = _a[_i];
        var tr = document.createElement('tr');
        var tdDescription = document.createElement('td');
        var tdCategory = document.createElement('td');
        var tdDate = document.createElement('td');
        var tdAmount = document.createElement('td');
        var tdAction = document.createElement('td');
        tdDescription.appendChild(document.createTextNode(operation.description));
        tdCategory.appendChild(document.createTextNode(operation.categories.name));
        tdDate.appendChild(document.createTextNode(operation.date));
        tdAmount.appendChild(document.createTextNode(operation.amount.toString()));
        tdAction.appendChild(document.createTextNode(operation.type));
        tr.appendChild(tdDescription);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tr.appendChild(tdAction);
        var tbody = tableOperations.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);
        // })
    }
};
loadOperationTable();
