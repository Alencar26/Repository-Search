//import Axios from './axios.js'
//Axios.getUserInfo('Alencar26')
//import api from './api.js';
import axios from 'axios';

class App {

    constructor() {

        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.Eventos();

    }

    Eventos() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {

        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id' , 'loading');

            this.formEl.appendChild(loadingEl);
        }
        else {
            document.getElementById('loading').remove();
        }
        

    }

    async addRepository(event) {
        event.preventDefault(); // evita que a página fique recarregando...

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0)
            return;

        this.setLoading();

        try{
            const response = await axios.get(`https://api.github.com/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;
    
            this.repositories.push({
    
                name: name,
                description: description,
                avatar_url: avatar_url,
                html_url: html_url
    
            });
    
            this.inputEl.value = '';
            
            this.render();
        }catch(err) {
            alert(`O repositório não existe. Menssagem: ${err.message}`)
        }

        this.setLoading(false);
        
    }

    render() {
        this.listEl.innerHTML = ''; // limpando todo html.

        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src' , repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target' , '_blank');
            linkEl.setAttribute('href' , repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }

}

new App(); // instanciando minha classe