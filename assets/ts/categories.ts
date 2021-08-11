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

const formCategory = document.getElementById('form-category')

let lstorage = getStorage();

const createCategory = (e) => {
    e.preventDefault();

    const form = e.target;
    const newCategoryName: string = form.name.value;

    const newCategory: Category = {
        id: 1,
        name: newCategoryName,
    }

    lstorage.categories.push(newCategory);

    localStorage.setItem('ahorradas-data', JSON.stringify(lstorage));
}

formCategory.addEventListener('submit', createCategory)
