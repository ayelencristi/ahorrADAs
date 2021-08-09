type LocalStorage = {
    categories?: Category[],
    operations?: Operation[]
}

type Operation = {
    description: string,
    categories: string,
    date: string,
    amount: number,
    type: "gasto" | "ganancia"
}

type Category = {
    id: number,
    name: string
}

const getStorage = (): LocalStorage => {
    let locStor: LocalStorage = JSON.parse(localStorage.getItem('ahorradas-data'));

    if(!locStor) {
       locStor = {
          categories: [],
          operations: [],
       } 
    }
 
    return locStor;
}

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




// const init = () => {
//     localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
// }

// init();






