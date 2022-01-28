import { Time } from "@angular/common";

export class ShipDetail {
    shipName:string;
    estimatedTimeOfBirth:string;
    estimatedTimeOfDeparture:string;
    overAllTime:number;
    constructor(){
        this.shipName='QueenMary2';
        this.estimatedTimeOfBirth='09-11-2020 11:32';
        this.estimatedTimeOfDeparture='09-11-2020 12:32';
        this.overAllTime=55;

    }

}
// <kendo-grid>
// <kendo-grid-column title=" " >
// </kendo-grid-column>

// <kendo-grid-column title="Berth 1-100"></kendo-grid-column>

// <kendo-grid-column title="Berth 2-100"></kendo-grid-column>
// </kendo-grid> 
