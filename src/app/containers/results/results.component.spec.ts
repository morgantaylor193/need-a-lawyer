import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { FromSlugPipe } from '../../pipes/from-slug.pipe';
import { ResultsComponent } from './results.component';


describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent, FromSlugPipe ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({city: 'phoenix', state: 'arizona', speciality: 'bankruptcy'})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeDefined();
  // });

  // it('should retrieve city parameter', () => {
  //   expect(component.city).toEqual('phoenix');
  // });

  // it('should retrieve state parameter', () => {
  //   expect(component.state).toEqual('arizona');
  // });

  // it('should retrieve speciality parameter', () => {
  //   expect(component.speciality).toEqual('bankruptcy');
  // });
});
