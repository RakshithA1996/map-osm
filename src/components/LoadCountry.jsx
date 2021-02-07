import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import setCoordinates from "../redux/actions/setCoordinates";

const LoadCountry = (props) => {
    const [loadValue, setValue] = useState("UNITED_STATES");
    const dispatch = useDispatch();

    const setLoadValue = (e) => {
        setValue(e.target.value)
    }

    const clickLoad = () => {
        dispatch(setCoordinates(loadValue))
    }

    return (
        <div className="LoadCountry">
            <select className="LoadCountry__Select" onChange={setLoadValue} value={loadValue}>
                <option className="LoadCountry__Select--Option" value="UNITED_STATES">United States</option>
                <option className="LoadCountry__Select--Option" value="INDIA">India</option>
                <option className="LoadCountry__Select--Option" value="UNITED_KINGDOM">United Kingdom</option>
            </select>
            <button className="LoadCountry__Button" onClick={clickLoad}>Load</button>
        </div>
    )
}

export default LoadCountry;