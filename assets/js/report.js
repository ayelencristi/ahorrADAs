var reportTable = document.getElementById('report-table');
var reportEmpty = document.getElementById('report-empty');
var locstorage = getStorage();
var showReportTable = function () {
    var locstorage = getStorage();
    (locstorage.operations.length >= 4);
    reportEmpty.classList.add('d-none');
    reportTable.classList.remove('d-none');
};
