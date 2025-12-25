import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-zero',
  templateUrl: './child-zero.component.html',
  styleUrls: ['./child-zero.component.scss']
})
export class ChildZeroComponent {

  @Input() childMsg!: any;
}
