const initCoordinate = {coordinates : {lat:0,lng:0},zoomLevel:2,cardDetails : {symbol:""}}

const coordinateReducer = (state = initCoordinate, action) => {
    switch(action.type){
        case "UNITED_STATES" :
            return {
                ...state,
                coordinates : {
                    lat:37.0902,
                    lng:-95.7129
                },
                zoomLevel: window.screen.availWidth > 700 ? 4.5 : 2.5,
                cardDetails : {
                    symbol:"$",
                    currency:"United States Dollar",
                    speed:"mph",
                    distance:"miles",
                    volume:"gallon",
                    timezone:"GMT-05"
                }
            }
        case "INDIA" :
            return { 
                ...state,
                coordinates : {
                    lat:20.5937,
                    lng:78.9629
                },
                zoomLevel: window.screen.availWidth > 700 ? 5 : 3.5,
                cardDetails : {
                    symbol:"₹",
                    currency:"Rupee",
                    speed:"kmph",
                    distance:"kilometers",
                    volume:"litre",
                    timezone:"GMT+0530"
                }
            }
        case "UNITED_KINGDOM" :
            return {
                ...state,
                coordinates : {
                    lat:55.0730,
                    lng:-1.88103
                },
                zoomLevel: window.screen.availWidth > 700 ? 6 : 5,
                cardDetails : {
                    symbol:"£",
                    currency:"Pound Sterling",
                    speed:"mph",
                    distance:"miles",
                    volume:"gallon",
                    timezone:"GMT"
                }
            }
        default :
            return state;
    }
}

export default coordinateReducer;