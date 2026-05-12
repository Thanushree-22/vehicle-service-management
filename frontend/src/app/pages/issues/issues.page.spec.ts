import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesPage } from './issues.page';

describe('IssuesPage', () => {
  let component: IssuesPage;
  let fixture: ComponentFixture<IssuesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
