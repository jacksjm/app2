import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<Array<Oferta>>

  constructor(private ofertasService: OfertasService ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  public pesquisa(event: Event): void {
	  console.log((<HTMLInputElement>event.target).value)
  }
  public pesquisa2(termoDaBusca: string): void {
	this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
	this.ofertas.subscribe(
		(ofertas: Array<Oferta>) => console.log(ofertas)
	)
}

}
