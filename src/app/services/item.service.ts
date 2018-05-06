import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http'; 
// const BASE_URL = 'https://trasher-backend.herokuapp.com'; 
const BASE_URL = 'http://localhost:8080';

@Injectable()

export class ItemService {
    constructor(private http: Http) {}

    createNewItem(data) {
        return this.http.post(`${BASE_URL}/item/new`, data)
    }

    getAllItems() {
        return this.http.get(`${BASE_URL}/item/`)
    }

    deleleteItem(id) {
        return this.http.delete(`${BASE_URL}/item/delete/${id}`)            
    }

    getItemByCity(city) {
        return this.http.get(`${BASE_URL}/item/city/${city}`)
    }

    resolveItem(id) {
        return this.http.put(`${BASE_URL}/item/resolve/${id}`, {})            
    }
    
}