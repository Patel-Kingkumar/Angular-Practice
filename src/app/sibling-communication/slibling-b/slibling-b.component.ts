import { Component } from '@angular/core';
import { SliblingService } from '../slibling.service';

@Component({
  selector: 'app-slibling-b',
  templateUrl: './slibling-b.component.html',
  styleUrls: ['./slibling-b.component.scss']
})
export class SliblingBComponent {

  message: string = '';

  constructor(private sliblingService: SliblingService) {}

  ngOnInit() {
    this.sliblingService.message$.subscribe(data => {
      this.message = data;
    });
  }

}
