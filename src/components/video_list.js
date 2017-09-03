import React from 'react';

const VideoList = (props) => {
  const videos = props.videos
  //array of videos.. props is what passed to child Component in index.js.. in class based component it is accessed by this.props
  return(
    <ul className="col-md-4 list-group">
      {videos.length}
    </ul>
  );
}

export default VideoList
