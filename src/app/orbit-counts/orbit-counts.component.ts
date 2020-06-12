import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  total: number = 0;
  spaceDebris: number = 0;
  communications: number = 0;
  probes: number = 0;
  positioning: number = 0;
  spaceStations: number = 0;
  telescopes: number = 0;

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  populateCount(): void {
    for (let satellite of this.satellites) {
      if (satellite.type === "Space Debris") {
        this.spaceDebris += 1;
      } else if (satellite.type === "Communication") {
        this.communications += 1;
      } else if (satellite.type === "Probe") {
        this.probes += 1;
      } else if (satellite.type === "Positioning") {
        this.positioning += 1;
      } else if (satellite.type === "Space Station") {
        this.spaceStations += 1;
      } else if (satellite.type === "Telescope") {
        this.telescopes += 1;
      }
    };
    this.total = this.spaceDebris + this.communications + this.probes + this.positioning + this. spaceStations + this.telescopes;
  }

  countByType(type: string): number {
    let count = 0;
    if (this.satellites) {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type === type) {
          count++;
        }
      }
    }
    return count;
  }
}
