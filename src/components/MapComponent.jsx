import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import osm from "../osm-provider";
import "leaflet/dist/leaflet.css";
import { MapChildComponent } from './MapChildComponent';
import {useSelector} from "react-redux";

const MapComponent = (props) => {
    const coordinate = useSelector(state => state.coordinate);
    
    return (
        <div className="MapComponent">
            <MapContainer 
                center={coordinate.coordinates}
                zoom={coordinate.zoomLevel}
            >
                <MapChildComponent
                    center={coordinate.coordinates}
                    zoom={coordinate.zoomLevel}
                 />
                <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
            </MapContainer>
        </div>
    )
}

export default MapComponent;