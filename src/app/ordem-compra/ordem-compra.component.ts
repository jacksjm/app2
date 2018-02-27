import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento:  string = ''
  public formaPagamento: string = ''

  //controle de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
	  this.endereco = endereco
	  console.log(this.endereco)

	  //se a string for maior que 3
	  if (this.endereco.length > 3){
		  this.enderecoValido = true
	  }else{
		  this.enderecoValido = false
	  }

  }
  public atualizaNumero(numero: string): void {
	this.numero = numero
	console.log(this.numero)
	 //se a string for maior que 0
	if (this.endereco.length > 0){
		this.numeroValido = true
	}else{
		this.numeroValido = false
	}
  }
  public atualizaComplemento(complemento: string): void {
	this.complemento = complemento
	console.log(this.complemento)
	if (this.complemento.length > 0 ){
		this.complementoValido = true
    }
  }
  public atualizaFormaPagamento(formaPagamento: string): void {
	this.formaPagamento = formaPagamento
	console.log(this.formaPagamento)

	if (this.formaPagamento.length > 0 ){
		this.formaPagamentoValido = true
	}else{
		this.formaPagamentoValido = false
	}
  }
}
