import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieCreatePage } from './categorie-create.page';

describe('CategorieCreatePage', () => {
  let component: CategorieCreatePage;
  let fixture: ComponentFixture<CategorieCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
