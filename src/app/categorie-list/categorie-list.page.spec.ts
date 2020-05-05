import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieListPage } from './categorie-list.page';

describe('CategorieListPage', () => {
  let component: CategorieListPage;
  let fixture: ComponentFixture<CategorieListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
