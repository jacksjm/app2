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
	this.ofertaService.getOfertaPorId(this.route.snapshot.params["id"])
	.then(
		( ofertas: Oferta ) => {
				this.oferta = ofertas
			}
	)
	.catch(
		( param: any ) => { console.log( param ) }
	)
/*
	this.route.params.subscribe(
		(parametro: any) => {console.log(parametro)},
		(erro: any) => {console.log(erro)},
		() => {console.log('Processamento concluído')}
	)*/
  }

}
