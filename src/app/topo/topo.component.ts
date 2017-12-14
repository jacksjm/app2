import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<Array<Oferta>>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService ) { }

  ngOnInit() {
	this.ofertas = this.subjectPesquisa //retorno Oferta[]
		.debounceTime(1000)
		.switchMap( (termo: string) => {
			console.log('req')
		  return this.ofertasService.pesquisaOfertas(termo)
		})

	this.ofertas.subscribe((ofertas: Array<Oferta>) => console.log(ofertas))
  }
  ngOnDestroy() {
  }
  public pesquisa(termoDaBusca: string): void {
	console.log('Key Up: ',termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }
}
