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

// CARGAR TABLA CATEGORÍAS

const loadCategoriesTable = () => {
    const lstorage: LocalStorage = getStorage();

    const tableCategories = document.getElementById('table-categories');

    lstorage.categories.forEach((category) => {
        const tr = document.createElement('tr');
        const tdCategory = document.createElement('td');
        const tdEdit = document.createElement('a');
        const tdDelete = document.createElement('a');

        tdCategory.appendChild(document.createTextNode(category.name));
        tdEdit.appendChild(document.createTextNode('Editar'));        
        tdDelete.appendChild(document.createTextNode('Eliminar'));
        
        
        tr.appendChild(tdCategory);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        const tbody = tableCategories.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);

    })
}
loadCategoriesTable();




