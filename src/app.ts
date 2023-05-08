import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const form = document.querySelector('form')!;


declare var ol: any;

function searchAddressHandler(event: Event) {
    event.preventDefault();
  
    const coordinates = { lat: 28.18351, lng: -82.34495 }; // Can't fetch coordinates from Google API, use dummy ones
  
    document.getElementById('map')!.innerHTML = ''; 
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([coordinates.lng, coordinates.lat]),
        zoom: 16,
      }),
    });
  }
  

form.addEventListener('submit', searchAddressHandler);
