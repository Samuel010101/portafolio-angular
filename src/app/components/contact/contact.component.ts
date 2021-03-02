import { Component, OnInit, ViewChild } from '@angular/core';

// Esta linea de codigo nos permite declarar el signo $ como una variable para que angular lo reconozca 
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public autor: any;


  @ViewChild('textos', {static: true}) textos: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    //var opcion_clisica = document.querySelector('#texto').innerHTML;
    //console.log(this.textos.nativeElement.textContent);

  }

  cargarSlider(){
  	this.anchuraToSlider = this.widthSlider;

  }

  resetearSlider(){
  	this.anchuraToSlider = false;


  }

  getAutor(event){
    console.log(event);
    
  }
 	

}
