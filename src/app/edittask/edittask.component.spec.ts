import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskComponent } from './edittask.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('EdittaskComponent', () => {
  let component: EdittaskComponent;
  let fixture: ComponentFixture<EdittaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittaskComponent ],
      imports: [
        FormsModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
