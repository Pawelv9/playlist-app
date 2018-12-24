import { connect } from "react-redux";

import React from 'react'

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Choose one</div>
    }

  return (
    <div>
        <h3>Details:</h3>
        <p>
            Title: { song.title }
            <br/>
            Duration: { song.duration }    
        </p>  
    </div>
  )
}

const mapStateToProps = (state) => {
   return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);

