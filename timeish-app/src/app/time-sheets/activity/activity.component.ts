import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
  @Input() activity: Activity;
  @Input() hourlyPay: number;
  @Input() isSubmitted: boolean;
  @Output() deleteActivity = new EventEmitter<number>();
  @Output() addActivity = new EventEmitter<true>();

  constructor() { }

  ngOnInit() { }

  calculatePay(): void {
    this.activity.pay = this.hourlyPay * this.activity.hours;
  }

  delete(): void {
    this.deleteActivity.emit(this.activity.id);
  }

  add(): void {
    this.addActivity.emit(true);
  }
}
