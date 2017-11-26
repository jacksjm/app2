import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  constructor(private ofertaService: OfertasService ) { }

  ngOnInit() {
	  console.log(this.ofertaService.getOfertas())
  }

}
