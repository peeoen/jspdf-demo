import { Component, OnInit } from '@angular/core';
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

  constructor() {

  }

  ngOnInit() {
    // this.pdfSrc = 'assets/a4.pdf';
    this.doc = new jsPDF('p', 'px', 'a4');
    this.doc.text(10, 10, 'reportTitle1111111111reportTitle1111111111reportTitle111111111111111111111');
    // this.doc.addPage();
    const uri = this.doc.output('datauristring');
    this.pdfSrc = uri;
  }


  download() {
    const element = document.getElementById('content');
    html2canvas(element, {}).then(canvas => {
      console.log(canvas);
      const dataUrl = canvas.toDataURL('image/png');
      this.doc.addImage(canvas, 'image/png', 10, 10, element.clientWidth, element.clientHeight);
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
}
