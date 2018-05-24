import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
// import * as html2canvas from 'html2canvas';
// import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-blank-form',
  templateUrl: './blank-form.component.html',
  styleUrls: ['./blank-form.component.css']
})
export class BlankFormComponent implements OnInit {
  pdfSrc: string;
  doc: jsPDF;
  screen = {
    width: null,
    height: null
  };


  constructor() { }

  ngOnInit() {
    // this.pdfSrc = 'assets/a4.pdf';
    this.doc = new jsPDF('p', 'px', 'a3');
    this.doc.text(10, 10, 'reportTitle1111111111reportTitle1111111111reportTitle111111111111111111111');
    // this.doc.addPage();
    const uri = this.doc.output('datauristring');
    this.pdfSrc = uri;
    console.log(this.doc.internal);
    // html2canvas(element, {}).then(canvas => {
    //   console.log(canvas);
    //   const dataUrl = canvas.toDataURL('image/png');
    //   this.doc.addImage(canvas, 'image/png', 10, 10, element.clientWidth, element.clientHeight);
    //   const uri = this.doc.output('datauristring');
    //   this.pdfSrc = uri;
    // });
  }


  download() {
    const element = document.getElementById('content');
    const elementRect = element.getBoundingClientRect();
    html2canvas(element, {}).then(canvas => {
      const pdf = new jsPDF('p', 'px', 'a3');
      pdf.text(10, 10, 'reportTitle1111111111reportTitle1111111111reportTitle111111111111111111111');
      const dataUrl = canvas.toDataURL('image/png');
      const factor = 16 / 9;
      // const factor = pdf.internal.scaleFactor;
      const eLeft = parseFloat(element.style.left);
      const eTop = parseFloat(element.style.top);
      // const factor = this.doc.internal.scaleFactor;
      pdf.addImage(canvas, 'image/png', eLeft / factor, eTop / factor, element.clientWidth / factor, element.clientHeight / factor);
      pdf.save('test.pdf');
    });
  }

  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

  drop(event) {

  }

  dragEnd(event, e: HTMLElement) {
    const left = parseFloat(e.style.left);
    const top = parseFloat(e.style.top);
    e.style.left = (left + event.x) + 'px';
    e.style.top = (top + event.y) + 'px';
  }

  onResizeEnd(event: ResizeEvent, e: HTMLElement): void {
    const width = parseFloat(e.style.width);
    const height = parseFloat(e.style.height);
    e.style.width = (event.rectangle.width) + 'px';
    e.style.height = (event.rectangle.height) + 'px';
  }
}
