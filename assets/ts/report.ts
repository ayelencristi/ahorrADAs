const reportTable = document.getElementById('report-table');
const reportEmpty = document.getElementById('report-empty');

let locstorage: LocalStorage = getStorage();

const showReportTable = () => { 

    const locstorage: LocalStorage = getStorage();
   
    (locstorage.operations.length >= 4)
        reportEmpty.classList.add('d-none');
        reportTable.classList.remove('d-none');
}
