import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.sass']
})
export class PopUpComponent implements OnInit {
  @Input() showPopUp;
  @Output() onClose = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
  }

  closePopUp() {
    this.onClose.emit(false);
  }

}
