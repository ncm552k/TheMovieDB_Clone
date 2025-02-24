import React from 'react'
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import TopBar from './modules/TopBar'
import '../../assets/css/MovieDetailStyle.css'
import SeriesCast from './modules/SeriesCast'
import LastSeason from './modules/LastSeason'
import Social from './modules/Social'
import SideBar from './modules/SideBar'
import Media from './modules/Media.jsx'
import Recomendations from './modules/Recomendations'
import MovieDetail from './modules/MovieDetail.jsx'
import Trailer from '../components/MovieDetailComponents/Trailer/Trailer.jsx'

const MovieDetailWrap = () => {
  const location = window.location.href
  const trailer = useSelector((state) => state.trailer.status)
  return (
    <div className={`relative ${trailer ? 'filter' : ''} moive_detailt_page`}>
      <TopBar />
      <MovieDetail />
      <div className='flex justify-between'>
        <div className='content_left flex flex-col flex-1 pl-[56px] pt-[30px] w-[76%]'>
          <SeriesCast />
          {location.includes('tv') ? <LastSeason /> : null}
          <Social />
          <Media />
          <Recomendations />
        </div>
        <div className='sidebar w-[24%]'>
          <SideBar />
        </div>
      </div>
      <Trailer />
    </div>
  )
}

export default MovieDetailWrap
