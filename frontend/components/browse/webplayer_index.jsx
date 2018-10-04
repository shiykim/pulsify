import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlayingSong } from '../../actions/mediaplayer_actions';

class Webplayer extends React.Component {

  constructor(props){
    super(props);
    this.playerRef = React.createRef();
    this.progressBar = React.createRef();
    this.state = {
      playing: false,
      pause: false,
      progess: 0,
      time: 0,
    };
    this.interval = setInterval(this.time.bind(this), 250);
    this.interval = setInterval(this.startProgressBar.bind(this), 250);
  }

  componentDidUpdate(previousProps){
    if (previousProps.song !== this.props.song){
      this.setState({
        playing: Boolean(this.props.song)
      });
    }
  }

  togglePlay(){
    if (this.state.pause){
      this.playerRef.current.play();
      this.setState({pause: false});
    } else {
      this.setState({pause: true});
      this.playerRef.current.pause();
    }
  }

  previousSong(){
    if (this.props.queue_idx || this.props.queue_idx === 0){
      if (this.props.queue_idx !== 0){
        let prev = this.props.queue[this.props.queue_idx - 1];
        this.props.fetchPlayingSong(prev);
      }
    }
  }

  nextSong(){
    if (typeof this.props.queue_idx || this.props.queue_idx === 0){
      if (this.props.queue_idx !== (this.props.queue.length - 1)){
        let next = this.props.queue[this.props.queue_idx + 1];
        this.props.fetchPlayingSong(next);
      }
    }
  }

  shuffleSong(){

  }

  replaySong(){
    if (this.props.queue_idx){
      this.props.fetchPlayingSong(this.props.song);
    }
  }

  replayPlaylist(){
    if (this.props.queue_idx === (this.props.queue.length - 1)){
      let first = this.props.queue[0];
      this.props.fetchPlayingSong(first);
    }
  }

  startProgressBar(){
    if (this.props.song && this.playerRef.current){
      const songposition = (this.playerRef.current.currentTime * 100) /this.playerRef.current.duration;
      this.setState({progress: songposition});
    }
  }

  progressBarUpdate(e){
    let progressBar = this.progressBar.current;
    let player = this.playerRef.current;
    if (this.props.song){
      let progress = ((e.clientX - progressBar.offsetParent.offsetLeft) / progressBar.clientWidth) * 100;
      this.setState({progress: progress});
      player.currentTime = player.duration * (progress / 100);
    }
  }

  time(){
    let audio = this.playerRef.current;
    if (audio && this.props.song){
      let time = document.getElementById('time');
      let total = document.getElementById('total');
      let seconds = (Math.floor(audio.currentTime % 60) < 10 ? '0' : '') + Math.floor(audio.currentTime % 60);
      let minutes = Math.floor(audio.currentTime / 60);
      time.innerHTML = minutes + ":" + seconds;
      total.innerHTML = this.props.song.length ;
      if (audio.currentTime === audio.duration){
        this.nextSong();
      }
    }
  }

  songInfo(){
    let songinfo;
    if (this.state.playing){
      songinfo = (
          <div className='current-song-info'>
            <img className='song-info-album' src={this.props.song.photoUrl}  />
            <ul>
              <li className='playbar-title'> {this.props.song.title}</li>
              <li className='playbar-username'> {this.props.song.artist.name}</li>
            </ul>
          </div>
        );
    } else {
      songinfo = null;
    }
    return songinfo;
  }

  queue(){

  }

  volumeBar(){

  }

  render(){
    let current;
    let audio;
    if (this.state.playing){
      audio = (
        <audio ref={this.playerRef} autoPlay={true} src={this.props.song.mp3}/>
      );
    } else {
      audio = null;
    }

    if(this.state.pause){
      current = <img src={window.mainplay}/>;
    } else if (!this.state.paused && !this.state.playing){
      current = <img src={window.mainplay}/>;
    } else {
      current = <img className='play-icon' src={window.pause}/>;

    }

    return (
      <div>
      {this.songInfo()}
        <div className="player">
          <div className="controls">
            <button onClick={() => this.shuffleSong()}><img src={window.previous}/></button>
            <button onClick={() => this.previousSong()}><img src={window.previous}/></button>
            <button onClick={() => this.togglePlay()}>{current}</button>
            <button onClick={() => this.nextSong()}><img src={window.forward}/></button>
          </div>
            <div>
            </div>
            <div id='time'> </div>
            <div onClick={this.progressBarUpdate.bind(this)} className='progress'>
              <div ref={this.progressBar} className="bar">
                <div style={{ width: (this.state.progress) + '%' }}></div>
              </div>
            </div>
            <div id='total'> </div>
          {audio}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.ui.mediaplayer.playingSong,
    queue: state.ui.mediaplayer.queue,
    queue_idx: state.ui.mediaplayer.queue_idx,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayingSong: id => dispatch(fetchPlayingSong(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Webplayer);
