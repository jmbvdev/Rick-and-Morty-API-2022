


const LocationInfo = ({location}) => {

   
    return (
        <div className="location">
            <h1>{location.name}</h1>
            <div className="location-specs">
                <div><p><b>type: </b>{location.type}</p></div>
                <div><p><b>dimension: </b>{location.dimension}</p></div> 
                <div><p><b>population: </b>{location.residents?.length}</p></div>
            </div>
        </div>
    );
};

export default LocationInfo;