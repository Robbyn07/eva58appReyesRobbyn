import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ArriendoService } from '../../services/arriendo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  constructor(private router: Router, private arriendoService: ArriendoService) { }

  vehiculos:any;

  ngOnInit() {
    this.vehiculos = this.arriendoService.getVehiculos();
  }

  editar(vehiculo: any){
    let params: NavigationExtras = {
      queryParams: {
        vehiculo: vehiculo
      }
    }

    this.router.navigate(['vehiculos/editar'], params)
  }

  navRegistrar(){
    this.router.navigate(['vehiculos/registro'])
  }
}
