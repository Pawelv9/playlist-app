import {combineReducers} from 'redux'

const songsReducer = () => {
    return [
        { title: 'Smells Like Teen Spirit', duration: '4:04' },
        { title: 'No Hope', duration: '5:12' },
        { title: 'Starlight', duration: '3:12' },
        { title: 'Nightrain', duration: '4:42' }    
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})