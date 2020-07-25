
// EXEMPLOS

    class List {

        constructor() {
            this.data = [];
        }
    
        add(data) {
            this.data.push(data);
           // console.log(this.data);
        }
    
    }
    
    class TodoList extends List {
    
        constructor() {
            super(); // chamar o constructor da classe pai.
    
            this.usuario = 'Helô Lindinha';
        }
        
        mostraUsers() {
            //console.log(this.usuario);
        }
    }
    
    const MinhaLista = new TodoList();
    
    document.getElementById('novotodo').onclick = function() {
        MinhaLista.add('Helô');
    }
    
    MinhaLista.mostraUsers();
    
    
    
    
    
    
    
    const arr = [1, 3, 5, 9, 10, 11, 15,16];
    
    
    //USANDO MAP PARA TRABALHAR COM VETOR ARRAY
    
    
    // map percorre o vetor.
    const newArr = arr.map((item) => { return (item == 10) ? 'item é 10' : 'não tem esse numero'});
    console.log(newArr);
    
    const outroArr = arr.map((item) => {return item});
    console.log(outroArr);
    // map pegando index do vetor
    const arrIndex = arr.map((item, index) => { if(index == 3){ return item} })
    console.log(arrIndex);
    
    
    
    //USANDO REDUCE NO ARRAY
    
    
    const red = arr.reduce(item => item); // arrow function simplificada
    console.log(red)
    
    const red2 = arr.reduce((total, next) => {return total + next;})
    console.log(red2)
    
    
    //USANDO FILTER NO ARRAY
    
    
    const filter = arr.filter((item) =>{if(item == 9){return item}})
    console.log(filter)
    
    const filter2 = arr.filter((item) =>{
        return item % 2 === 0
    })
    console.log(filter2)
    
    
    //USANDO FIND
    
    const find = arr.find((item) =>{return item == 16})
    console.log(find)
    // mesma codigo de cima com a arrow function simplificada
    const find2 = arr.find(item => item == 16)
    console.log(find2)
    
    const user = {
        nome: 'André',
        idade: 24,
        endereco: {
            cidade: 'Curitiba',
            estado: 'PR'
        },
    }
    
    console.log(user)
    //desestruturação
    const { nome, idade, endereco: { cidade } } = user
    
    console.log(nome)
    console.log(idade)
    console.log(cidade)
    
    
    
    
    //    REST E SPREAD    //
    
    
     //REST => REST => ...
    
    function listar(...parametros) {
        return parametros
    }
    console.log(listar(1,2,3,5,9,11))
    
    
    function somarParametros(...parametros) {
        return parametros.reduce((total, next) => total + next)
    }
    console.log(somarParametros(1,2,3,5,6,6,6,9))
    
    
    
    
    //SPREAD => SPREAD => SPREAD => SPREAD ...
    
    const arr1 = [1,2,3]
    const arr2 = [4,5,6]
    const arr3 = [...arr1,...arr2] // pegou dados dos outros array
    console.log(arr3)
    
    const userTest = {
        nome: 'André',
        idade: 23
    }
    
    const userTest2 = { ...userTest, nome: 'Helo'}
    
    console.log(userTest2)
