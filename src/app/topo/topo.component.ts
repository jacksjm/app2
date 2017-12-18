import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<Array<Oferta>>
  public ofertas2: Array<Oferta>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService ) { }

  ngOnInit() {
	this.ofertas = this.subjectPesquisa //retorno Oferta[]
		.debounceTime(500) //executa a ação após 1 segundo
		.distinctUntilChanged()
		.switchMap( (termo: string) => {
			console.log('req')
			if(termo.trim() === ''){
				//retorna um Observable de array de ofertas vazio
				return Observable.of<Array<Oferta>>([])
			}else{
				return this.ofertasService.pesquisaOfertas(termo)
			}
		})
		.catch( ( err: any ) => {
			console.log( err )
			return Observable.of<Array<Oferta>>([])
		})

	this.ofertas.subscribe((ofertas: Array<Oferta>) => {
		this.ofertas2 = ofertas
	})
  }
  ngOnDestroy() {
  }
  public pesquisa(termoDaBusca: string): void {
	console.log('Key Up: ',termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }
}
