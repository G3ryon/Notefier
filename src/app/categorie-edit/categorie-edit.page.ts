import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.page.html',
  styleUrls: ['./categorie-edit.page.scss'],
})
export class CategorieEditPage implements OnInit {

  id: number;
  data: Category;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) { 
    this.data = new Category();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getCategory(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateCategory(this.id, this.data).subscribe(response => {
      this.router.navigate(['categorie-list']);
    })
  }
}
