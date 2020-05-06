import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.page.html',
  styleUrls: ['./categorie-create.page.scss'],
})
export class CategorieCreatePage implements OnInit {

  data: Category;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Category();
   }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItemCategories(this.data).subscribe((response) => {
      this.router.navigate(['categorie-list']);
    });

}}

