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
              }
          ],
          operations: []
       } 
    }
 
    return locStor;
 }

const init = () => {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
}

init();






