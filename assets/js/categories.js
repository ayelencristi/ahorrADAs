// const storage = getStorage();
// const getStorage = (): LocalStorage => {
//     let locStor: LocalStorage = JSON.parse(localStorage.getItem('ahorradas-data'));
//     if(!locStor) {
//         locStor = {
//             categories: Category = [
//                 {
//                     id: 1,
//                     name: "Comida",
//                 },
//                 {
//                     id: 2,
//                     name: "Servicios"
//                 },
//                 {
//                     id: 3,
//                     name: "Salidas"
//                 },
//                 {
//                     id: 4,
//                     name: "Educación"
//                 },
//                 {
//                     id: 5,
//                     name: "Transporte"
//                 },
//                 {
//                     id: 4,
//                     name: "Trabajo"
//                 },
//             ],
//             operations: []
//         } 
//     }
//     return locStor;
// }
// formCategory.addEventListener('submit',()=> {
//     alert("funciona")
// })
// const init = () => {
//     localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
// }
// init();
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
