var params = new URLSearchParams(window.location.search);
if (params.get('id')) {
}
//FUNCION CARGAR SELECT DE CATEGORIES
var selectCatOperations = document.getElementById('select-categories-op');
loadForm(selectCatOperations);
