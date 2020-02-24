import { async, TestBed } from '@angular/core/testing'
import { UiFormModule } from './ui.module'

describe('UiFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiFormModule]
    }).compileComponents()
  }))

  it('should create', () => {
    expect(UiFormModule).toBeDefined()
  })
})
