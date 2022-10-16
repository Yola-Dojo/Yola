import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibXJtYWNsZWFuODkiLCJhIjoiY2w5YjRpZHJzMWJhYzNxdDhob2U5Y3g2MyJ9.AKG0pT54OcyWuDUWaotypw'

const Map = () => {

    const [mapView, setMapView] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    })

  return (
    <div>Map
        <ReactMapGL 
        initialViewState={{...mapView}} onViewportChange={(newView) => setMapView(newView.mapView)} 
        mapboxAccessToken={MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v9" style={{width:350,height:300}}
        >
            <Marker longitude={-122.0376} latitude={38.3577} offsetLeft={0} offsetTop={0} color="red" ></Marker>
        </ReactMapGL>
    </div>
  )
}

export default Map