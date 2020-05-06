import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieDetailPage } from './categorie-detail.page';

describe('CategorieDetailPage', () => {
  let component: CategorieDetailPage;
  let fixture: ComponentFixture<CategorieDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
