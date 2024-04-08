import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { IVehicle } from 'src/app/core/entities/productGroups/vehicle';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{
  @Input() vehicles$: Observable<IVehicle[]>;
  @Output() onVehicleFilterUpdated = new EventEmitter<number[]>();
  filters: VehicleFilter[];

  constructor() {
    
  }
  ngOnInit(): void {
    this.vehicles$.subscribe(x => {
      this.filters = x.map(v => new VehicleFilter(v))
    })
  }
  
  onChange(ob: MatCheckboxChange, vehicleId: number) {
    let indexToReplace = this.filters.findIndex(item => item.id == vehicleId);
    this.filters[indexToReplace].isSelected = ob.checked;

    this.onVehicleFilterUpdated.emit(this.filters.filter(v => v.isSelected).map(x => x.id));
  } 
}

class VehicleFilter{
  id: number;
  isSelected: boolean;
  name: string;
  constructor(v: IVehicle){
    this.id = v.id;
    this.isSelected = false;
    this.name = v.name;
  }
}