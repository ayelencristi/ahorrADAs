var getStorage = function () {
    var locStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (!locStor) {
        locStor = {
            categories: [
                {
                    id: 1,
                    name: "Comida"
                },
                {
                    id: 2,
                    name: "Servicios"
                }
            ],
            operations: []
        };
    }
    return locStor;
};
var init = function () {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()));
};
init();
