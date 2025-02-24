/* eslint-disable no-unused-vars */
import React from 'react'

const TopBar = () => {
  return (
    <div className='h-[46px] TopBar'>
      <ul className='h-full top_bar gap-x-[40px] font-normal flex justify-center'>
        <li className='relative h-full overview'>
          <a href='Menu1'>Overview</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='rounded-lg border'>
            <li>
              <a href='#fdsas'>Main</a>
            </li>
            <li>
              <a href='fdsas'>Alternative Titles</a>
            </li>
            <li>
              <a href='fdsas'>Cast & Crew</a>
            </li>
            <li>
              <a href='fdsas'>Episode Groups</a>
            </li>
            <li>
              <a href='fdsas'>Seasons</a>
            </li>
            <li>
              <a href='fdsas'>Translations</a>
            </li>
            <li className='mt-[14px]'>
              <a href='fdsas'>Changes</a>
            </li>
            <li>
              <a href='fdsas'>Report</a>
            </li>
            <li>
              <a href='fdsas'>Edit</a>
            </li>
          </ul>
        </li>
        <li className='media'>
          <a href='Media'>Media</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='rounded-lg border'>
            <li className='flex gap-x-[23px] justify-between'>
              <a href='jdkasj'>Backdrops</a>
              <span>51</span>
            </li>
            <li className='flex justify-between'>
              <a href='jdkasj'>Logos</a>
              <span>14</span>
            </li>
            <li className='flex justify-between'>
              <a href='jdkasj'>Posters</a>
              <span>85</span>
            </li>
            <li className='flex justify-between items-center relative'>
              <a href='jdkasj'>Video</a>
              <i className='fa-solid fa-caret-right' />
              <ul className='px-2 left-full top-[0px] py-[10px] rounded-md'>
                <li className='flex justify-between gap-x-4 px-[20px]'>
                  <a href='adsfsad'>Trailer</a>
                  <span>1</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='fandom'>
          <a href='fandom'>Fandom</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='py-4  rounded-lg border'>
            <li className='flex gap-x-[23px] justify-between items-center relative'>
              <a href='jkda'>Discussions</a>
              <i className='fa-solid fa-caret-right' />
              <ul className='border top-0 left-full py-[10px] rounded-md'>
                <li className='px-[20px]'>
                  <a href='adsfsad'>Overview</a>
                </li>
                <li className='flex items-center justify-between gap-x-[20px]'>
                  <a href='adsfsad'>General</a>
                  <span>3</span>
                </li>
                <li className='flex items-center justify-between gap-x-[20px]'>
                  <a href='adsfsad'>Content issues</a>
                  <span>62</span>
                </li>
              </ul>
            </li>
            <li>
              <a href='jkda'>Reviews</a>
            </li>
          </ul>
        </li>
        <li className='share mr-[11px]'>
          <a href='Share'>Share</a>
          <i className='pl-[6px] fa-solid fa-caret-down'> </i>
          <ul className='py-4  rounded-lg border'>
            <li>
              <a href='dkaklf'>Share Link</a>
            </li>
            <li>
              <a href='dkaklf'>Facebook </a>
            </li>
            <li>
              <a href='dkaklf'>Tweet</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default TopBar
