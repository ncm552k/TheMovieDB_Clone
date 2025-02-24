/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, Modal } from '@mui/material'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLanguages } from '../../../../apis/movieDetailApi.js'
import { setModalPoster } from '../../../../app/redux/slices/movieImgSlice.js'
import { setLanguage } from '../../../../app/redux/slices/movieSlice.js'
import Dropdown from '../Dropdown/Dropdown.jsx'

const ModalPoster = ({ handleClose, open }) => {
  const dispatch = useDispatch()
  const dataMovie = useSelector((state) => state.movie.value)
  const poster = useSelector((state) => state.movieimg.poster)
  const [indexImg, setIndexImg] = useState(0)
  const [value, setValue] = useState({ key: 'en', name: 'English' })
  useEffect(() => {
    const getAPI = async () => {
      const result = await getLanguages()
      const languages = result.data.filter((item) => !_.isEmpty(item.name))
      dispatch(setLanguage(languages))
    }
    getAPI()
  }, [])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
  }
  if (_.isEmpty(dataMovie)) return null
  const resultPoster = _.uniqBy(poster, 'file_path')
  const listPoster = resultPoster.filter((item) => item?.iso_639_1 === value.key)
  // console.log('🚀 ~ listPoster:', listPoster[indexImg], indexImg)
  dispatch(setModalPoster(listPoster))
  const handleSlide = (type) => {
    if (type === 'next') {
      indexImg === listPoster.length - 1 ? setIndexImg(0) : setIndexImg((p) => p + 1)
    } else {
      indexImg === 0 ? setIndexImg(listPoster.length - 1) : setIndexImg((p) => p - 1)
    }
  }
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <section className='modal_content'>
          <div className=' content_img'>
            <img
              className='h-full'
              src={`https://image.tmdb.org/t/p/w440_and_h660_face${listPoster[indexImg]?.file_path}`}
              alt=''
            />
          </div>
          <div className='content_info'>
            <button
              onClick={() => handleClose()}
              className='transition-all px-[10px] absolute top-5 right-5 duration-300 rounded-xl hover:cursor-pointer'
              type='button'
            >
              <i
                id='close'
                className='py-2 text-3xl opacity-50 hover:color-white hover:opacity-100 fa-solid fa-xmark'
              />
            </button>
            <div className='reaction'>
              <i className='fa-solid fa-thumbs-down' />
              <i className='fa-solid fa-thumbs-up' />
            </div>
            <div className='border-b info_part border-grayBold'>
              <p>Info</p>
              <i className='fa-solid fa-lock-open' />
            </div>
            <span className='primary_part'>
              Primary?
              <i className='fa-solid fa-circle-xmark' />
            </span>
            <div className='added_part'>
              <p>Add By</p>
              <p>vgfu34</p>
            </div>
            <div className='size_part'>
              <p>Size</p>
              <p>2000*3000</p>
            </div>
            <div className='language_part'>
              <p>Language</p>
              <Dropdown setValue={setValue} value={value} />
            </div>
            <div className='flex justify-between border-b tagged_part border-grayBold'>
              <h3>Tagged Peopple</h3>
              <i className='fa-solid fa-plus' />
            </div>
            <p>No records have been added.</p>
            <div className='slide_poster_part'>
              <i onClick={() => handleSlide('prev')} className='fa-solid fa-arrow-left-long' />
              <i onClick={() => handleSlide('next')} className='fa-solid fa-arrow-right-long' />
            </div>
          </div>
        </section>
      </Box>
    </Modal>
  )
}
export default ModalPoster
