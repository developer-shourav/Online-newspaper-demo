import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Informations = () => {
    const [infos, setInfos] = useState([]);
    useEffect( ()=>{
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=73ca249cadd147ed84c5455bb0c1bea3")
        .then(res => res.json())
        .then(data => setInfos(data?.articles))
    },[])
    return (
        <div>
            
            {
                infos.map( info=> <News info={info} key={info.content}> 

                </News> )
            }
          
        </div>
    );
};

export default Informations;