var getID = function () {
    if (lstorage.categories.length > 0) {
        var lastItem = lstorage.categories[lstorage.categories.length - 1];
        return lastItem.id + 1;
    }
    else {
        return 1;
    }
};
var formCategory = document.getElementById('form-category');
var lstorage = getStorage();
var createCategory = function (e) {
    e.preventDefault();
    var form = e.target;
    var newCategoryName = form.name.value;
    var newCategory = {
        id: getID(),
        name: newCategoryName
    };
    lstorage.categories.push(newCategory);
    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
};
formCategory.addEventListener('submit', createCategory);
// CARGAR TABLA CATEGORÍAS
var loadCategoriesTable = function () {
    var lstorage = getStorage();
    var tableCategories = document.getElementById('table-categories');
    lstorage.categories.forEach(function (category) {
        var tr = document.createElement('tr');
        var tdCategory = document.createElement('td');
        var tdEdit = document.createElement('a');
        var tdDelete = document.createElement('a');
        tdCategory.appendChild(document.createTextNode(category.name));
        tdEdit.appendChild(document.createTextNode('Editar'));
        tdDelete.appendChild(document.createTextNode('Eliminar'));
        tr.appendChild(tdCategory);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        var tbody = tableCategories.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);
    });
};
loadCategoriesTable();
