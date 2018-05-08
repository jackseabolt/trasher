import { Component, Output, EventEmitter } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ItemService } from '../../services/item.service'; 
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    templateUrl: './newItemForm.component.html', 
    selector: 'NewItemForm', 
    styleUrls: ['./newItemForm.component.css'], 
    animations: [
      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(300)
        ])
      ])
    ]
})

export class NewItemForm {
    constructor(private service: ItemService) {}

    @Output() submit = new EventEmitter(); 
    @Output() close = new EventEmitter(); 

    captcha = false;
    captchaError = false;  

    form = new FormGroup({
        description: new FormControl('',[
            Validators.required,
            Validators.minLength(3)
        ]), 
        street: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]), 
        city: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]), 
        phone: new FormControl('', [
            Validators.minLength(10)
        ]), 
        'desired_reply': new FormControl()
    });

    get description() {
        return this.form.get('description');
    }

    get street() {
        return this.form.get('street');
    }

    get city() {
        return this.form.get('city');
    }

    get phone() {
        return this.form.get('phone');
    }

    get desired_reply() {
        return this.form.get('desired_reply')
    }

    handleSubmit() {
        if(!this.captcha) {
            return this.captchaError = true;
        }
        this.captchaError = false; 
        if(this.form.value.desired_reply === null) {
            this.form.value.desired_reply = false
        }
        this.service.createNewItem(this.form.value)
        .subscribe(res => {
            this.submit.emit()
            this.close.emit();
            this.form.reset();  
        }), 
        error => console.error(error); 
    }

    handleClose() {
        this.close.emit(); 
    }

    resolved(captchaResponse: string) {
        this.captcha = true; 
    }
}
