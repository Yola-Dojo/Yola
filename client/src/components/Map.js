import React, {useState} from 'react'
import Map, {Source, Layer} from 'react-map-gl'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibXJtYWNsZWFuODkiLCJhIjoiY2w5YjRpZHJzMWJhYzNxdDhob2U5Y3g2MyJ9.AKG0pT54OcyWuDUWaotypw'

//this goes into the <Source> element inside <Map>
const geojson = {
  type: 'FeatureCollection',
  features: [
    //These are the locations right here.  One per location.  
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-87.6877, 42.0451]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-93.4558, 45.0725]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-89.4008, 43.0722]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-84.5120, 39.1031]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-85.7585, 38.2527]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-86.2520, 41.6764]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-76.3055, 40.0379]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-76.4922, 38.9784]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-77.0838, 38.9566]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-77.3823, 38.8639]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-75.1575, 39.9509]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-81.0348, 34.0007]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-80.0550, 40.6266]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-79.9959, 40.4406]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-84.3099, 39.3601]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-77.0947, 38.9847]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-77.3823, 38.8639]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-77.0597, 38.8606]}}
  ]
}

//<Layer> deconstructs all of this into element attributes.  <Layer> is also inside <Map>
const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#e8291c'
  }
}

const OurMap = () => {

  const [viewport, setViewport] = useState();

  return (

    <Map initialViewState={{longitude: -84.5120, latitude: 39.1031, zoom: 4}} style={{width: 600, height: 600}} mapStyle='mapbox://styles/mapbox/streets-v9' mapboxAccessToken={MAPBOX_TOKEN}>
      <Source id='my-data' type='geojson' data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>

    // <div>Map
    //     <ReactMapGL 
    //     initialViewState={{...mapView}} onViewportChange={(newView) => setMapView(newView.mapView)} 
    //     mapboxAccessToken={MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v9" style={{width:350,height:300}}
    //     >
    //         <Marker longitude={-122.0376} latitude={38.3577} offsetLeft={0} offsetTop={0} color="red" ></Marker>
    //     </ReactMapGL>
    // </div>
  )
}

export default OurMap