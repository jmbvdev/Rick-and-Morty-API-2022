import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residentsUrl}) => {
    console.log(residentsUrl)
    
    return (
        <div>
            <h2>Residents</h2>
            <div className='card-container'>
                {
                    residentsUrl?.map(resident=>(
                        <ResidentInfo resident={resident}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ResidentList;