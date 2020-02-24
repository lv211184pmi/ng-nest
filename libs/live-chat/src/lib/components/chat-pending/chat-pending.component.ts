import { Component, OnInit } from '@angular/core'

import { UIButtonConfig } from '../../interfaces/ui-button.interface'

@Component({
  selector: 'ng-nest-chat-pending',
  templateUrl: './chat-pending.component.html',
  styleUrls: ['./chat-pending.component.css']
})
export class ChatPendingComponent implements OnInit {
  buttonConfig: UIButtonConfig = {
    type: 'basic',
    // icon: 'favorite'
    label: 'tratata'
  }
  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClick() {
    console.log('Button was clicked!')
  }
}
