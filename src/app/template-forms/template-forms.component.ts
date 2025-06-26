import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.scss'
})
export class TemplateFormsComponent {
submit(myform:NgForm){
console.log(myform.value);
}
}
