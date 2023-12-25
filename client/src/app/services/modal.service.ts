import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public onClose = new EventEmitter();
  public onOpen = new EventEmitter();
  close() {
    this.onClose.emit();
  }
  open() {
    this.onOpen.emit();
  }
}
