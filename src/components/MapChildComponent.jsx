import {useMap} from 'react-leaflet';

export const MapChildComponent = (props) => {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}