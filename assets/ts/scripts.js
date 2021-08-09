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
var formCategory = document.getElementById('form-category');
var lstorage = getStorage();
var createCategory = function (e) {
    e.preventDefault();
    var form = e.target;
    var newCategoryName = form.name.value;
    var newCategory = {
        id: 1,
        name: newCategoryName
    };
    lstorage.categories.push(newCategory);
    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
};
formCategory.addEventListener('submit', createCategory);
// const init = () => {
//     localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
// }
// init();
