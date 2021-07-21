import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Crear Vehiculos', url: '/vehiculos/registro', icon: 'mail' },
    { title: 'Listar Vehiculos', url: '/vehiculos/listado', icon: 'paper-plane' },
  ];
  constructor() {}
}
