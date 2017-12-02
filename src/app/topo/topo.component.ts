import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  constructor(private ofertasService: OfertasService ) { }

  ngOnInit() {
  }

  public pesquisa(event: Event): void {
	  console.log((<HTMLInputElement>event.target).value)
  }
  public pesquisa2(termoDaBusca: string): void {
	console.log(this.ofertasService.pesquisaOfertas(termoDaBusca))
}

}
