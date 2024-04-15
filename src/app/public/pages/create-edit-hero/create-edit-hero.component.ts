import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-hero',
  templateUrl: './create-edit-hero.component.html',
  styleUrls: ['./create-edit-hero.component.scss']
})
export class CreateEditHeroComponent {
    public mode: string = "create";

    heroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.heroForm = this.fb.group({
      id: [{value: 1, disabled: true}],  // ID no accesible
      name: ['', Validators.required],
      real_name: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      birth_date: ['', Validators.required],
      power: ['', Validators.required],
      imgUrl: [''],  // Campo opcional
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.heroForm.valid) {
      console.log(this.heroForm.value);
    }
  }
}
