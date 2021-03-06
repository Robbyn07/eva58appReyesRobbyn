import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../domain/vehiculo';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriendoService } from '../../services/arriendo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  marca:string;
  modelo:string;
  anio:any
  precio:any

  vehiculo: Vehiculo = new Vehiculo;

  constructor(private router: Router, private route: ActivatedRoute, private arriendoService: ArriendoService) { 
    route.queryParams.subscribe(params =>{
      console.log(params)
      this.marca = params.marca;
      this.modelo = params.modelo;
      this.anio = params.anio;
      this.precio = params.precio;
      
    })
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.vehiculo);
    this.arriendoService.save(this.vehiculo)
  }

}
