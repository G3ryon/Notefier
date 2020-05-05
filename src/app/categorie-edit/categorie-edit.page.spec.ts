import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieEditPage } from './categorie-edit.page';

describe('CategorieEditPage', () => {
  let component: CategorieEditPage;
  let fixture: ComponentFixture<CategorieEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
