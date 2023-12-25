import { Component, Input, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalContent', { read: ViewContainerRef }) modalContent: ViewContainerRef;
  @Input() componentType: Type<any>;

  ngAfterViewInit() {
    this.modalContent.clear();
    this.modalContent.createComponent(this.componentType);
  }
}
