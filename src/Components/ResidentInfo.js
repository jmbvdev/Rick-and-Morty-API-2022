import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {
    const [residents, setResidents]= useState({})

    useEffect(()=>{
axios.get(resident)
.then(res=>setResidents(res.data))
    },[resident])


    return (
        <div >
            <div className='card'>
                <img src={residents.image} alt="" />
                <div className='card-specs'>
                    <h4>{residents.name}</h4>
                    <div className='card-status'>
                        <div className={residents.status==="Alive"? (
                         "circle-green"
                        ):(
                            residents.status==="Dead"?(
                                "circle-red"
                            ):(
                                "circle-grey"
                        ))}></div>
                        <h5>{residents.species} - {residents.status}</h5>
                    </div>
                    <p className='light-grey'>origin</p>
                    <p>{residents.origin?.name}</p>
                    <p className='light-grey'>episodes where appear</p>
                    <h5>{residents.episode?.length}</h5>

                </div>

            </div>
        </div>
    );
};

export default ResidentInfo;