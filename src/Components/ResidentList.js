import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residentsUrl, isLoading}) => {

    
    return (
        <div>
            <h2>Residents</h2>
            {
                isLoading?(
                    <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <h2>Loading....</h2>
                </div>
                ):(
            <div className='card-container'>
                {
                    residentsUrl?.map(resident=>(
                        <ResidentInfo resident={resident} key={resident}/>
                ))}
            </div>

                )
            }
        </div>
    );
};

export default ResidentList;