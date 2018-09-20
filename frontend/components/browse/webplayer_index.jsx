import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Webplayer extends React.Component {

  constructor(props){
    super(props);
    this.playerRef = React.createRef();
    this.progressBar = React.createRef();
    this.state = {
      playing: false,
      progess: 0,
      time: 0,
    };
    this.interval = setInterval(this.time.bind(this), 250);
    this.interval = setInterval(this.startProgressBar.bind(this), 250);
  }

  togglePlay(){
    if (this.playerRef.current.paused){
      this.playerRef.current.play();
      this.setState({playing: true});
    } else {
      this.playerRef.current.pause();
      this.setState({playing: false});
    }
  }

  startProgressBar(){
    if (this.props.song){
      const songposition = (this.playerRef.current.currentTime * 100) /this.playerRef.current.duration;
      this.setState({progress: songposition});
    }
  }

  progressBarUpdate(e){
    if (this.props.song){
      let progress = ((e.clientX - this.progressBar.current.offsetParent.offsetLeft) / this.progressBar.current.clientWidth) * 100;
      this.setState({progress: progress});
      this.playerRef.current.currentTime = this.playerRef.current.duration * (progress / 100);
    }
  }

  time(){
    let audio = this.playerRef.current;
    if (audio && this.props.song){
      let time = document.getElementById('time');
      let total = document.getElementById('total');
      let seconds = (Math.floor(this.playerRef.current.currentTime % 60) < 10 ? '0' : '') + Math.floor(this.playerRef.current.currentTime % 60);
      let minutes = Math.floor(this.playerRef.current.currentTime / 60);
      let totalSeconds = (Math.floor(this.playerRef.current.duration % 60) < 10 ? '0' : '') + Math.floor(this.playerRef.current.duration % 60);
      let totalMinutes = Math.floor(this.playerRef.current.duration / 60);
      time.innerHTML = minutes + ":" + seconds;
      total.innerHTML = totalMinutes + ":" + totalSeconds ;
    }
  }

  render(){
    let current;
    if (this.state.playing || this.props.song !== ""){
      current = <img className='play-icon' src={window.pause}/>;
    } else {
      current = <img src={window.mainplay}/>;
    }

    // let songinfo;
    // if (this.props.song){
    //   songinfo = (
    //     <div className='current-song-info'>
    //       <ul>
    //         <li> {this.props.song.title}</li>
    //         <li> {this.props.song.artist}</li>
    //       </ul>
    //     </div>
    //     );
    //   } else {}

    return (
      <div className="player">
        <div className="controls">
          <div id='time'> </div>
          <button onClick={() => this.props.previous()}><img src={window.previous}/></button>
          <button onClick={() => this.togglePlay()}>{current}</button>
          <button onClick={() => this.props.fastForward()}><img src={window.forward}/></button>
          <div id='total'> </div>
        </div>
          <div>
          </div>
          <div onClick={this.progressBarUpdate.bind(this)} className='progress'>
            <div ref={this.progressBar} className="bar">
              <div style={{ width: (this.state.progress) + '%' }}></div>
            </div>
          </div>
        <audio ref={this.playerRef} onupdatetime={() => this.progressBarUpdate()} autoPlay="true" src={this.props.song.mp3}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.ui.mediaplayer.playingSong || '',
  };
};
// const mapDispatchToProps = dispatch => ({
//   seek: (time) => dispatch(seek(time)),
//   nextTrack: () => dispatch(nextTrack()),
//   prevTrack: () => dispatch(prevTrack())
// });

export default connect(mapStateToProps, null)(Webplayer);
