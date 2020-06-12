import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {
  warning: boolean = false;
  zebra: boolean = false;

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

 flipZebra(): boolean {
   this.zebra = !this.zebra
   return this.zebra;
 }

 isSpaceDebris(type: string): boolean {
   return type === "Space Debris";
}
}
