import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residentsUrl, isLoading}) => {

    const[page, setPage]= useState(1)

 
    const residentsPerPage=8;
    const lastIndex= page*residentsPerPage
    const firsIndex= lastIndex-residentsPerPage
    const totalPages= Math.ceil(residentsUrl?.length/residentsPerPage)
    let pagesNumber = []
    for (let i = 1; i <= totalPages; i++) {
        pagesNumber.push(i) 
    }

   

    return (
        <div>
            <h2>Residents</h2>
            {
                isLoading?(
                    <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <h2>Loading....</h2>
                </div>
                ):(
            <div className='card-container'>
                {
                    residentsUrl?.slice(firsIndex,lastIndex).map(resident=>(
                        <ResidentInfo resident={resident} key={resident}/>
                ))}
            </div>

                )
            }
            <div className='pages'>
                <div>
                    {
                        page!==1 &&(
                            <button className='page-number' onClick={()=>setPage(page-1)}><i class="fa-solid fa-angle-left"></i></button>
                            )
                    }
                </div>
                <div className='total-pages'>
                    {
                        pagesNumber.map(number =><button className='page-number' key={number} onClick={()=>setPage(number)}>{number}</button>)
                    }
                </div>
                <div>
                    {
                        page!==totalPages &&(
                            <button className='page-number'  onClick={()=>setPage(page+1)}><i className="fa-solid fa-angle-right"></i></button>
                        )
                    }
                </div>
            </div>

            
           
        </div>
    );
};

export default ResidentList;