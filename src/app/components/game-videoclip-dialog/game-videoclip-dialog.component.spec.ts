import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameVideoclipDialogComponent } from './game-videoclip-dialog.component';

describe('GameVideoclipDialogComponent', () => {
  let component: GameVideoclipDialogComponent;
  let fixture: ComponentFixture<GameVideoclipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameVideoclipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameVideoclipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
