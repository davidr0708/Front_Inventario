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

  factibilidades: any = []
  cads: any = []

  ngOnInit(){
    this.getCads()
    this.getFactibilidades()
  }

  getFactibilidades(){
    this.service.getFactibilidades().subscribe(res =>{
      this.factibilidades = res;
    }, err => {
      console.error(err);
    });
  }
  
  getCads(){
    this.service.getCads().subscribe(res =>{
      this.cads = res;
    }, err => {
      console.error(err);
    });
  }
}
