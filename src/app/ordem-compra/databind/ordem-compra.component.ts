import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  //Pedido
  public pedido: Pedido = new Pedido('','','','')
  public idPedidoCompra: number

  public endereco: string = ''
  public numero: string = ''
  public complemento:  string = ''
  public formaPagamento: string = ''

  //controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean


  //estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
	//this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
	  this.endereco = endereco
	  //console.log(this.endereco)

	  //se a string for maior que 3
	  if (this.endereco.length > 3){
		  this.enderecoValido = true
	  }else{
		  this.enderecoValido = false
	  }

	  this.enderecoEstadoPrimitivo = false
	  this.habilitaForm()
  }
  public atualizaNumero(numero: string): void {
	this.numero = numero
	//console.log(this.numero)
	 //se a string for maior que 0
	if (this.numero.length > 0){
		this.numeroValido = true
	}else{
		this.numeroValido = false
	}
	//console.log(this.numeroValido)
	this.numeroEstadoPrimitivo = false
	this.habilitaForm()
  }
  public atualizaComplemento(complemento: string): void {
	this.complemento = complemento
	//console.log(this.complemento)
	if (this.complemento.length > 0 ){
		this.complementoValido = true
	}

	this.complementoEstadoPrimitivo = false
	this.habilitaForm()
  }
  public atualizaFormaPagamento(formaPagamento: string): void {
	this.formaPagamento = formaPagamento
	//console.log(this.formaPagamento)

	if (this.formaPagamento.length > 0 ){
		this.formaPagamentoValido = true
	}else{
		this.formaPagamentoValido = false
	}

	this.formaPagamentoEstadoPrimitivo = false
	this.habilitaForm()
  }

  public habilitaForm(): void {
	if(this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true){
		this.formEstado = ''
	}else{
		this.formEstado = 'disabled'
	}
  }

  public confirmarCompra(): void {

	this.pedido.endereco = this.endereco
	this.pedido.numero = this.numero
	this.pedido.complemento = this.complemento
	this.pedido.formaPagamento = this.formaPagamento

	this.ordemCompraService.efetivarCompra(this.pedido)
		.subscribe((idPedido: number) => {
			this.idPedidoCompra = idPedido
		})
  }
}
