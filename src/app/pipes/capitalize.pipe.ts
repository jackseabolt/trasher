import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({ 
    name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(value: string, args?: any) {
        if(!value) {
            return null
        }
        let first = value.charAt(0).toUpperCase(); 
        let rest = value.slice(1);
        return first + rest
    }
}