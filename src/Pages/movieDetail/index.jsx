import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { movieServices } from '../../Services/movie';
import MovieDetailHeader from '../../Component/movieDetailHeader';
import MovieDetailShowTime from '../../Component/movieDetailShowTime';

export default function MovieDetail(props) {
    let [movie, setMovie] = useState({});
    useEffect(() => {
        movieServices.getMovieDetail(props.match.params.id).then(res => {
            setMovie(res.data);
        }).catch(err => {
            console.log(err);
        })
    })
    return (
        <div>
            <MovieDetailHeader movie={movie}/>
            <MovieDetailShowTime movie={movie}/>
            {/* {movie.heThongRapChieu?.map((cine,index)=>{
                return  <img className="cumRap__img" src={cine.logo} style={{ width: '35px', height: '35px' }} />
            })} */}
        </div>
    )
}
