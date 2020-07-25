import axios from 'axios'

export default class Api {

    static async getUserInfo(usename) {
        try{
            const response = await axios.get(`https://api.github.com/users/${usename}`)
            console.log(response)
        }catch(err){
            console.warn(`Erro na APi ${err.message}`)
        }

    }

}