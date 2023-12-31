import React from 'react'
import '../styles/LeftMenu.css'
import {FaSpotify,FaEllipsisH} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import Menu from './Menu'
import MenuList from './MenuList'
import MenuPlayList from './MenuPlayList'
import TrackList from './TrackList'
const LeftMenu = () => {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
          <i>
            <FaSpotify/>
         </i>
<h2>Spotify</h2>
<i>
    <FaEllipsisH/>
</i>
        </div>
<div className='searchBox'>
    <input type='text' placeholder='search...'/>
   <i><BiSearchAlt/></i>
</div>

<Menu title={Menu} menuObject={MenuList}/>
<MenuPlayList/>
<TrackList/>
    </div>
  )
}

export default LeftMenu