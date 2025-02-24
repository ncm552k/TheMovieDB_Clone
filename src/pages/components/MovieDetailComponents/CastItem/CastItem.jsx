/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const CastItem = ({ dataItem, className = '' }) => {
  const {
    profile_path = '',
    name = 'Name of actor',
    character = 'Giới thiệu diễn viên',
    epsiode,
    id = '3894',
  } = dataItem
  return (
    <div
      className={`border border-[rgb(227_227_227)] overflow-hidden flex-[0_0_auto] mb-8 rounded-xl shadow-md ${className}`}
    >
      <Link to={`/person/${id}`}>
        <img
          className='w-[138px] h-[175px]'
          src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
          alt=''
        />
      </Link>
      <div className='px-[10px] pt-[10px] infor_cast'>
        <Link to={`/person/${id}`}>
          <b>{name}</b>
        </Link>
        <p className='text-[14.4px] whitespace-pre-wrap'>{character}</p>
        <p className='text-[14.4px] text-textMeta'>{epsiode}</p>
      </div>
    </div>
  )
}

export default CastItem
