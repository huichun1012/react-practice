import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Sounds of My Life", duration: "3:11" },
    { title: "See You on Monday", duration: "4:05" },
    { title: "轟炸", duration: "3:13" },
    { title: "而立", duration: "5:33" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
