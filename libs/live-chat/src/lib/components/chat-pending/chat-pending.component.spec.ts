import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChatPendingComponent } from './chet-pending.component'

describe('ChatPendingComponent', () => {
  let component: ChatPendingComponent
  let fixture: ComponentFixture<ChatPendingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPendingComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPendingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
