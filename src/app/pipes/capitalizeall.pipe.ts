import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
    name: 'capitalizeAll'
})

export class CapitalizeAllPipe implements PipeTransform {
    transform(value: string, args?: any){
        if(!value) {
            return null
        }
        let words = value.split(" "); 
        let capWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return capWords.join(" "); 
    }
}