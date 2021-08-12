var getStorage = function () {
    var locStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (!locStor) {
        locStor = {
            categories: [],
            operations: []
        };
    }
    return locStor;
};
var init = function () {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()));
};
init();
// ------------ BOTON NUEVA OPERACION-----------
var btnNewOperation = document.getElementById('new-operation');
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
