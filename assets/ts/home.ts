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

const loadOperationTable = () => {
    const lstorage: LocalStorage = getStorage();

    const tableOperations = document.getElementById('operations');

    lstorage.operations.forEach((operation) => {
        const tr = document.createElement('tr');
        const tdDescription = document.createElement('td');
        const tdCategory = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdAmount = document.createElement('td');
        const tdAction = document.createElement('td');

        tdDescription.appendChild(document.createTextNode(operation.description));
        tdCategory.appendChild(document.createTextNode(operation.categories.name));
        tdDate.appendChild(document.createTextNode(operation.date));
        tdAmount.appendChild(document.createTextNode(operation.amount.toString()));
        tdAction.appendChild(document.createTextNode(operation.type));

        tr.appendChild(tdDescription);
        tr.appendChild(tdCategory);
        tr.appendChild(tdDate);
        tr.appendChild(tdAmount);
        tr.appendChild(tdAction);
        const tbody = tableOperations.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);

    })
}
loadOperationTable();




