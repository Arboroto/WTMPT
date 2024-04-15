import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-hero',
  templateUrl: './create-edit-hero.component.html',
  styleUrls: ['./create-edit-hero.component.scss']
})
export class CreateEditHeroComponent {
    public action: string = "create";

    heroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.action = params['id'];
    });

    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      real_name: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      birth_date: ['', Validators.required],
      power: ['', Validators.required],
      imgUrl: [''], 
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.heroForm.valid) {
      console.log(this.heroForm.value);
    }
  }
}
