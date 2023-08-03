import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent  implements OnInit {

  constructor(private service: InventarioService){

  }

  ngOnInit = () =>{
    this.service.getDispositivos().subscribe(res =>{
      console.log(res);
    });
  }
}
