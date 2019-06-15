import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'input-date',
  templateUrl: './InputDate.component.html',
  styleUrls: ['./InputDate.component.scss', ]
})

export class InputDate implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Input() min: string;
  @Input() max: string;
  @Input() validation: string;
  @Input() submitted: boolean;
  @Input() invalid: boolean;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(){
      if(!this.max) this.max = this.convertToCalenderFormat(this.getCurrentDate());
  }

  getCurrentDate(): number {
    return new Date().getTime();
  }

  convertToCalenderFormat(date): string {
    return moment(parseInt(date)).format('YYYY-MM-DD');
  }

  convertToUnixFormat(date): string {
    return (new Date(date).getTime()).toString();
  }

}