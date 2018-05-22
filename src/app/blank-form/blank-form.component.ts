import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-blank-form',
  templateUrl: './blank-form.component.html',
  styleUrls: ['./blank-form.component.css']
})
export class BlankFormComponent implements OnInit {
  pdfSrc: string;
  constructor() { }

  ngOnInit() {
    const doc = new jsPDF();
    const uri = doc.output('datauristring');
    this.pdfSrc = uri;
  }

}
