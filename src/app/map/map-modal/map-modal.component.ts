import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { YaReadyEvent } from 'angular8-yandex-maps';
import { CoffeeShopsListComponent } from 'src/app/coffee-shops-list/coffee-shops-list.component';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  
  public map!: ymaps.Map;
  public selectedCoordinates!: string;

  @Input()
  parent!: CoffeeShopsListComponent

  constructor() { }

  ngOnInit(): void {
    console.log("map init!!!");
    //ymaps.ready(() => this.initMap())
  }

  onMapReady(event: YaReadyEvent<ymaps.Map>): void {
    this.map = event.target;

    this.map.events.add('click', (e: ymaps.IEvent<MouseEvent, {}>) => {
      var coords = e.get('coords');
      var coordinatesString = coords.join(',');
      this.parent.location = coordinatesString
      alert(coordinatesString);
    })

    console.log("map init");
  }

  private initMap() {
    console.log("init map")

    this.map = new ymaps.Map("map", {
      center: [59.9386, 30.3141],
      zoom: 7
    })

    console.log("map init: created")

    console.log("map", this.map);

    this.map.events.add('click', (e: ymaps.IEvent<MouseEvent, {}>) => {
      var coords = e.get('coords');
      alert(coords.join(','))
      console.log("Coordinates:", coords)
    })

    console.log("map init");
  }

}

