// FUNCION CARGAR OPTIONS SELECT CATEGORIES
const loadForm = () => {
    const lstorage: LocalStorage = getStorage();

    const selectCategories = document.getElementById('select-categories');

    for(const category of lstorage.categories) {
        const elem = document.createElement('option');
        elem.innerText = category.name;
        elem.value = category.id;
        selectCategories.appendChild(elem);
    }
}
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
