import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videos = props.videos
  //array of videos.. props is what passed to child Component in index.js.. in class based component it is accessed by this.props
  const videoItems = videos.map((video) => {
    return(
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  //videoItems is an array of videos
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList
