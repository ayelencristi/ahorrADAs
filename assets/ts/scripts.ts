type LocalStorage = {
    categories?: Category[],
    operations?: Operation[]
}

type Operation = {
    id: number,
    description: string,
    categories: Category,
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
          ],
       } 
    }
 
    return locStor;
}







const init = () => {
    localStorage.setItem('ahorradas-data', JSON.stringify(getStorage()))
}

init();





