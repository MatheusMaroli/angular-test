import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture : ComponentFixture<LikeWidgetComponent> = null;  
  let component : LikeWidgetComponent = null;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  })

  it('should create component', () => {
    expect(component).toBeTruthy();
  })

  it('should auto generate Id when id input property is null', () => {    
    fixture.autoDetectChanges();
    expect(component.id).toBeTruthy();
  })  

  it('should NOT generate ID when id input property is not null', () => {
    const expectId = 'expectID';
    component.id = expectId;
    fixture.autoDetectChanges();
    expect(component.id).toBe(expectId);
  })

  it(`when triggered #${LikeWidgetComponent.prototype.likeHandler.name} should emit liked subscribe`, () => {
    spyOn(component.liked, 'emit')
    fixture.autoDetectChanges();
    component.likeHandler();
    expect(component.liked.emit).toHaveBeenCalled();

  })
});
