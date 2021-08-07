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
            categories: [
                {
                    id: 1,
                    name: "Comida",
                },
                {
                    id: 2,
                    name: "Servicios"
                },
                {
                    id: 3,
                    name: "Salidas"
                },
                {
                    id: 4,
                    name: "Educación"
                },
                {
                    id: 5,
                    name: "Transporte"
                },
                {
                    id: 4,
                    name: "Trabajo"
                },
            ],
            operations: []
        } 
    }
    return locStor;
}

const formCategory = document.getElementById('form-category')
formCategory.addEventListener('submit',()=> {
    alert("funciona")
})


const init = () => {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
}
init();
