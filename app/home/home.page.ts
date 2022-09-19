import { Component, OnInit } from '@angular/core'; 
import { ApiService } from 'src/environments/service/apiservice.service'; 

@Component({ 
 selector: 'app-home', 
 templateUrl: 'home.page.html', 
 styleUrls: ['home.page.scss'], 
}) 
export class HomePage implements OnInit{ 
 resultado: Object; 
 
 constructor(private api: ApiService) { 
 this.CarregaCep(); 
 
} 
ngOnInit() { 
} 
CarregaCep() { 
 this.api.getCep() 
 .then((json) => { 
 console.log(json); 
 this.resultado = json; 
 }) 
 .catch((erro) => { 
 console.log("Erro ao carregar a requisição do CEP" + erro) 
 }); 
} 
}