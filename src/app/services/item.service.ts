import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http'; 

@Injectable()

export class ItemService {
    constructor(private http: Http) {}

    createNewItem(data) {
        return this.http.post('http://localhost:8080/item/new', data)
            .subscribe(res => {
                let newItem = res.json()
                console.log("New item created")
                console.log(newItem)
            }), 
            error => console.error(error); 
    }

    getAllItems() {
        return this.http.get('http://localhost:8080/item/')
    }

    deleleteItem(id) {
        return this.http.delete(`http://localhost:8080/item//delete/${id}`)            
    }
}