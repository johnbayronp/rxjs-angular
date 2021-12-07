import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  template: `<h2>{{value}}<h2>`,
  styles: [`h2{ color:Red}`],
})
export class RxjsComponent implements OnInit {
  constructor() {}
  value: any;

  ngOnInit() {
    const subject = new BehaviorSubject(1);

    const interval$ = interval(100);
    subject.subscribe((stado) => (this.value = stado));

    subject.next(3);
    subject.next(4);
  }
}

