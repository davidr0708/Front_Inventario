import { Component, OnInit } from '@angular/core';
import { FactibilidadesService } from '../../services/factibilidades.service';

@Component({
  selector: 'app-factibilidades',
  templateUrl: './factibilidades.component.html',
  styleUrls: ['./factibilidades.component.scss']
})
export class FactibilidadesComponent implements OnInit{

  constructor(private service: FactibilidadesService){

  }

  datos: any = []

  ngOnInit(){
    // console.log("epa la arepa");
    this.service.getFactibilidades().subscribe(res =>{
      this.datos = res;
      console.log(this.datos);
    }, err => {
      console.error(err);
    });
  }
}
