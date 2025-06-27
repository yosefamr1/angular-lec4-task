import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent  implements OnInit{
  myform!:FormGroup;
  ngOnInit(){
    this.myform= new FormGroup({
      name: new FormControl ('',[Validators.required]),
      username: new FormControl('',[Validators.required,Validators.pattern("^\\S+$")]),
      email: new FormControl('',[Validators.required , Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$")]),
      password: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")])

    })
  }

submit(){
  console.log(this.myform.value);
  
}

}
