import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertaService: OfertasService ) { }

  ngOnInit() {
	  //Recuperação com Snapshot
	  //this.route.snapshot.params.id
	  //Recuperação com Subscribe
	  //this.route.params.subscribe((parametro: any)=>{console.log(parametro)})
	/*this.ofertaService.getOfertaId(this.route.snapshot.params.id)
	.then(
		( ofertas: Array<Oferta> ) => {
				this.oferta = ofertas[0]
				console.log(this.oferta)
			}
	)
	.catch(
		( param: any ) => { console.log( param ) }
	)*/
  }

}
