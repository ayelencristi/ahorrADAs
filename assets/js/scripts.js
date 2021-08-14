var getStorage = function () {
    var locStor = JSON.parse(localStorage.getItem('ahorradas-data'));
    if (!locStor) {
        locStor = {
            categories: [],
            operations: [
                {
                    description: 'Lorem Ipsum',
                    amount: 123,
                    date: '10/10/2021',
                    id: 1,
                    categories: { id: 3, name: 'Comida' },
                    type: 'gasto'
                }
            ]
        };
    }
    return locStor;
};
var init = function () {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()));
};
init();
