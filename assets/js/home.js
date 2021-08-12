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
