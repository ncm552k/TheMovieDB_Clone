/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import _ from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Dropdown = ({ setValue, value }) => {
  const languages = useSelector((state) => state.movie.languages)
  const modalPoster = useSelector((state) => state.movieimg.modalPoster)
  const [state, setState] = useState(false)
  useEffect(() => {
    if (_.isEmpty(modalPoster)) {
      toast.error(`No poster of language: ${value.name}, Please choose other language`)
    }
  }, [])
  const handleChooseLanguage = (data) => {
    setValue(data)
    toast.success('The language has been uploaded!')
  }
  if (_.isEmpty(languages)) return null
  return (
    <div>
      <div onClick={() => setState(!state)} className='show_search'>
        <span className='result'>{value.name}</span>
        <i className='fa-solid fa-caret-down' />
      </div>
      {state && (
        <div className='search_part'>
          <div className='input_search'>
            <input placeholder='Enter your keyword' type='text' />
            <i className='fa-solid fa-magnifying-glass' />
          </div>
          <div className='search_result'>
            {languages.map((item) => (
              <p onClick={() => handleChooseLanguage({ key: item.iso_639_1, name: item.name })} key={uuidv4()}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
