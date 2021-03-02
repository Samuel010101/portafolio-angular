import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
      public widthSlider: number;
      

  // A esta linea de codigo @Input() le llamamos decorador de esta forma le estamos pasando la propiedad anchura desde el componente padre.
  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){

    this.autor = {
      nombre: "Sam Minyety",
      website: "samuelminyetyweb.do",
      youtube: "Sam Minyety Web"

    };

  }

  ngOnInit(): void {

  		$('#logo').click(function(e){
  		e.preventDefault();
  		
  		$("header").css('background', 'green')	
  				   //.css('height', '50px');
  	});

	    $('.galeria').bxSlider({
	          mode: 'fade',
	          captions: false,
	          slideWidth: this.anchura
	    });

  }

      lanzar(event){  
        console.log(event);     
        this.conseguirAutor.emit(this.autor);
  }

}
