import { Component, OnInit } from '@angular/core';
import { mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-opr',
  templateUrl: './rxjs-opr.component.html',
  styleUrls: ['./rxjs-opr.component.scss'],
})
export class RxjsOprComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.mergeMapOpr();
    this.switchMapOpr();
  }

  mergeMapOpr() {
    of(1, 2, 3)
      .pipe(mergeMap((x) => of(x * 10)))
      .subscribe(console.log);
  }

  switchMapOpr() {
    of(1, 2, 3)
      .pipe(switchMap((x) => of(x * 10)))
      .subscribe(console.log);
  }
}
