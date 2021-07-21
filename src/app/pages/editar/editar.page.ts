import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriendoService } from '../../services/arriendo.service';
import { Vehiculo } from '../../domain/vehiculo';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  vehiculo: Vehiculo = new Vehiculo;

  constructor(private router: Router, private route: ActivatedRoute, private arriendoService: ArriendoService) { 
    route.queryParams.subscribe(params =>{
      console.log(params)
      this.vehiculo = params.vehiculo;
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.vehiculo = this.router.getCurrentNavigation().extras.queryParams.vehiculo
      }
    })
  }

  ngOnInit() {
  }

  guardarTotal(){
    console.log(this.vehiculo);
    this.arriendoService.save(this.vehiculo)
    this.router.navigate(['vehiculos/listado'])
  }

  crear(){
    this.router.navigate(['vehiculos/listado'])
  }

}
