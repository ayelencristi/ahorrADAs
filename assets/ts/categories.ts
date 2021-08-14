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



