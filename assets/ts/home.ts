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

