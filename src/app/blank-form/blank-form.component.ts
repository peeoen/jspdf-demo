import { Component, OnInit } from '@angular/core';
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

  dropOverActive = false;

  droppedData = '';

  onDrop({ dropData }: { dropData: any }): void {
    console.log(dropData);
    this.dropOverActive = false;
    this.droppedData = dropData;
    setTimeout(() => {
      this.droppedData = '';
    }, 2000);
  }
  constructor() { }

  ngOnInit() {
    // this.pdfSrc = 'assets/a4.pdf';
    this.doc = new jsPDF('p', 'px', 'a4');
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
    const element1 = document.getElementsByClassName('form-container')[0];
    const ratio = element1.clientHeight / element1.clientWidth;
    const element = document.getElementById('content');
    const elementRect = element.getBoundingClientRect();
    console.log(elementRect);
    html2canvas(element, {}).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      const factor = 16 / 9;
      // const factor = this.doc.internal.scaleFactor;
      // this.doc.internal.scaleFactor;
      // this.doc.addImage(canvas, 'image/png', element.clientLeft / factor , element.clientTop / factor, element.clientWidth / factor, element.clientHeight / factor);
      this.doc.addImage(canvas, 'image/png', 100 / factor, 300 / factor, element.clientWidth / factor, element.clientHeight / factor);
      // this.doc.addImage(canvas, 'image/png', 0 / factor , 0 / factor, this.doc.internal.pageSize.width , this.doc.internal.pageSize.height );
      this.doc.save('test.pdf');
    });
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
    console.log(document.getElementsByClassName('pdfViewer')[0].clientWidth);
    console.log(document.getElementsByClassName('pdfViewer')[0].clientHeight);
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  }

  dragEnd(event, e: HTMLElement) {
    const left = parseFloat(e.style.left);
    const top = parseFloat(e.style.top);
    e.style.left = (left + event.x) + 'px';
    e.style.top = (top + event.y) + 'px';
  }
}
