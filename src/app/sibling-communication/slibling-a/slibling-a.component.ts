import { Component } from '@angular/core';
import { SliblingService } from '../slibling.service';

@Component({
  selector: 'app-slibling-a',
  templateUrl: './slibling-a.component.html',
  styleUrls: ['./slibling-a.component.scss']
})
export class SliblingAComponent {

  constructor(private sliblingService: SliblingService) { }

  send() {
    this.sliblingService.sendMessage('Hello from Component Ten');
  }

}
