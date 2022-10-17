import React, {useState} from 'react'
import Map, {Source, Layer} from 'react-map-gl'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibXJtYWNsZWFuODkiLCJhIjoiY2w5YjRpZHJzMWJhYzNxdDhob2U5Y3g2MyJ9.AKG0pT54OcyWuDUWaotypw'

//this goes into the <Source> element inside <Map>
const geojson = {
  type: 'FeatureCollection',
  features: [
    //These are the locations right here.  One per location.  
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.0376, 37.9577]}},
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.2376, 37.3577]}}
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

    <Map initialViewState={{longitude: -122.4376, latitude: 37.7577, zoom: 8}} style={{width: 600, height: 600}} mapStyle='mapbox://styles/mapbox/streets-v9' mapboxAccessToken={MAPBOX_TOKEN}>
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