import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx'
import { Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta
  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

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

	//---- Observable de Timer ----
	this.route.params.subscribe(
		(parametro: any) => {console.log(parametro)},
		(erro: any) => {console.log(erro)},
		() => {console.log('Processamento concluído')}
	)

	let tempo = Observable.interval(2000)

	this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => { console.log(intervalo)})

	//---- Observable criado do começo ----
	//Observable {observável}
	let meuObservableTeste = Observable.create((observer: Observer<number>) => {
		observer.next(1)
		observer.next(2)
		//observer.error("Erro encontrado")
		observer.complete()
		observer.next(3)
	})

	//Observable {observador}
	this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
		( resultado: number ) => console.log(resultado + 10), //Next
		( error: string ) => console.log(error), //Error
		() => console.log('Stream finalizada com sucesso') //Complete
	)
  }

  ngOnDestroy(){
	this.tempoObservableSubscription.unsubscribe()
	this.meuObservableTesteSubscription.unsubscribe()
  }

}
