import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Vehiculo } from '../domain/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ArriendoService {

  constructor(public afs: AngularFirestore) { }

  save(vehiculo: Vehiculo){
    const refVehiculo = this.afs.collection("vehiculos");

    if(vehiculo.uid == null){
      vehiculo.uid = this.afs.createId();
      vehiculo.activo = true;
    }

    refVehiculo.doc(vehiculo.uid).set(Object.assign({}, vehiculo));
  }

  getVehiculos(): Observable<any[]>{
    return this.afs.collection("vehiculos",
      ref => ref.where("activo", ">=", true)
    ).valueChanges();
  }

  buscarModelo(palabraModelo:string): Observable<any[]>{
    return this.afs.collection("vehiculos",
      ref => ref.where("modelo", ">=", palabraModelo)
    ).valueChanges();
  }

}
