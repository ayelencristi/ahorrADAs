// FUNCION CARGAR OPTIONS SELECT CATEGORIES
var loadForm = function () {
    var lstorage = getStorage();
    var selectCategories = document.getElementById('select-categories');
    for (var _i = 0, _a = lstorage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var elem = document.createElement('option');
        elem.innerText = category.name;
        elem.value = category.id;
        selectCategories.appendChild(elem);
    }
};
loadForm();
// ------------ BOTON NUEVA OPERACION-----------
var btnNewOperation = document.getElementById('btn-new-operation');
var divNewOperation = document.getElementById('div-new-operation');
var btnAddCategory = document.getElementById('btn-add-category');
var btnCancel = document.getElementById('btn-cancel');
var divMain = document.getElementById('div-main');
var tabNewOperation = function () {
    divMain.classList.add('d-none');
    divNewOperation.classList.remove('d-none');
};
btnNewOperation.addEventListener('click', tabNewOperation);
var closeTabNewOperation = function () {
    divMain.classList.remove('d-none');
    divNewOperation.classList.add('d-none');
};
btnCancel.addEventListener('click', closeTabNewOperation);
