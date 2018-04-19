import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: string, args?: any) {
        if(!value) {
            return null
        }
        if(value.length < 30) {
            return value; 
        }
        return value.substr(0, 30) + '...';
    }
 }