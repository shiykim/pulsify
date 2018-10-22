import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPlayingSong, toggleSong } from '../../actions/mediaplayer_actions';
import { ProtectedRoute } from '../../util/route_util';
import { queueIndex } from './queue_index';

class Webplayer extends React.Component {

  constructor(props){
    super(props);
    this.playerRef = React.createRef();
    this.progressBar = React.createRef();
    this.volumeBar = React.createRef();
    this.state = {
      playing: false,
      pause: false,
      progess: 0,
      time: 0,
      volume: 0.5,
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
    if (!this.props.playing){
      this.playerRef.current.play();
      this.setState({pause: false});
      this.props.toggleSong();
    } else {
      this.setState({pause: true});
      this.playerRef.current.pause();
      this.props.toggleSong();
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

  volumeBarUpdate(e){
    let volumeBar = this.volumeBar.current;
    let player = this.playerRef.current;
    if (this.state.playing){
      let volume = ((e.clientX - volumeBar.offsetParent.offsetLeft) / volumeBar.clientWidth);
      if (volume < 0.05) {
        volume = 0;
      }
      this.setState({volume: volume});
      player.volume = volume;
    }
  }

  songInfo(){
    let songinfo;
    if (this.state.playing){
      songinfo = (
          <div className='current-song-info'>
            <Link to={`/albums/${this.props.song.album.id}`}>
              <img className='song-info-album' src={this.props.song.photoUrl}  />
            </Link>
            <ul>
              <Link to={`/albums/${this.props.song.album.id}`}>
                <li className='playbar-title'>{this.props.song.title}</li>
              </Link>
              <Link to={`/artists/${this.props.song.artist.id}`}>
                <li className='playbar-username'> {this.props.song.artist.name}</li>
              </Link>
            </ul>
          </div>
        );
    } else {
      songinfo = null;
    }
    return songinfo;
  }

  render(){
    let current;
    let audio;
    let volume;

    if (this.state.playing){
      audio = (
        <audio ref={this.playerRef} autoPlay={true} src={this.props.song.mp3}/>
      );
    } else {
      audio = null;
    }

    if (this.props.playing){
      current = <img className='play-icon' src={window.pause}/>;
    } else {
      current = <img src={window.mainplay}/>;
    }

    if (this.state.volume === 0){
        volume = (
          <svg className='sound-svgs' height='20px' viewBox="0 0 54 54">
          <path d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414   C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"/>
          <path d="M28.404,4.4c-0.975-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19   c0,0.266,0.105,0.52,0.293,0.707S0.734,37,1,37l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12   c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402C29.403,49.035,30,48.005,30,46.844V7.156   C30,5.995,29.403,4.965,28.404,4.4z M28,46.844c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L13,35.556V31   c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996L2,35V18h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34   c0.46-0.242,0.86-0.07,1.016,0.018C27.783,6.347,28,6.725,28,7.156V46.844z"/>
        </svg>
        );
      } else if (this.state.volume < 0.35) {
        volume = (
          <svg className='sound-svgs sound-one' height="17px" viewBox="0 0 46.004 46.004">
          	<path d="M29.893,0.402c-0.976-0.552-2.132-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L13.122,12.002H2.489   c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707s0.441,0.293,0.707,0.293l10.61-0.005l13.543,12.44   c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402   c0.999-0.564,1.596-1.595,1.596-2.756V3.158C31.489,1.997,30.892,0.967,29.893,0.402z M29.489,42.845   c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L14.489,31.557v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996   l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.86-0.07,1.016,0.018   c0.362,0.205,0.579,0.584,0.579,1.015V42.845z"/>
          	<path d="M34.766,9.54c-0.532-0.151-1.085,0.152-1.238,0.684c-0.153,0.53,0.152,1.085,0.684,1.238   c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04c-0.531,0.153-0.837,0.708-0.684,1.238   c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039c5.74-1.66,9.749-6.99,9.749-12.962S40.506,11.2,34.766,9.54   z"/>
          </svg>
        );
      } else if (this.state.volume < 0.6){
        volume = (
          <svg className='sound-svgs' height='20px' viewBox="0 0 52.026 52.026">
          	<path d="M28.404,3.413c-0.976-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,15.013H1   c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707S0.734,36.013,1,36.013l10.61-0.005l13.543,12.44   c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402   C29.403,48.048,30,47.018,30,45.857V6.169C30,5.008,29.403,3.978,28.404,3.413z M28,45.857c0,0.431-0.217,0.81-0.579,1.015   c-0.155,0.087-0.548,0.255-1,0.026L13,34.569v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1   s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.86-0.07,1.016,0.018C27.783,5.36,28,5.739,28,6.169V45.857z"/>
          	<path d="M38.797,7.066c-0.523-0.177-1.091,0.103-1.269,0.626c-0.177,0.522,0.103,1.091,0.626,1.269   c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554c-0.522,0.178-0.802,0.746-0.623,1.27   c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054c7.896-2.693,13.202-10.106,13.202-18.446   C52.026,17.166,46.71,9.753,38.797,7.066z"/>
          	<path d="M43.026,25.513c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684   c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04   c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039   C39.018,36.815,43.026,31.485,43.026,25.513z"/>
          </svg>
        );
      } else if (this.state.volume > 0.6){
        volume = (
          <svg className='sound-svgs' height='21px' viewBox="0 0 60 60">
        	<path d="M28.404,7.758c-0.975-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,19.358H1   c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707S0.734,40.358,1,40.358l10.61-0.005l13.543,12.44   c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402   C29.403,52.393,30,51.363,30,50.201V10.514C30,9.353,29.403,8.323,28.404,7.758z M28,50.201c0,0.431-0.217,0.81-0.579,1.015   c-0.155,0.087-0.548,0.255-1,0.026L13,38.913v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1   s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.861-0.07,1.016,0.018C27.783,9.704,28,10.083,28,10.514V50.201z"/>
        	<path d="M52.026,29.858c0-8.347-5.316-15.76-13.229-18.447c-0.522-0.177-1.091,0.103-1.269,0.626   c-0.177,0.522,0.103,1.091,0.626,1.269c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554   c-0.522,0.178-0.802,0.746-0.623,1.27c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054   C46.721,45.611,52.026,38.198,52.026,29.858z"/>
        	<path d="M44.453,6.374c-0.508-0.213-1.095,0.021-1.312,0.53C42.926,7.413,43.163,8,43.672,8.216C52.376,11.909,58,20.405,58,29.858   c0,9.777-5.894,18.38-15.015,21.914c-0.515,0.2-0.771,0.779-0.571,1.294c0.153,0.396,0.532,0.639,0.933,0.639   c0.12,0,0.242-0.021,0.361-0.067C53.605,49.801,60,40.467,60,29.858C60,19.6,53.897,10.382,44.453,6.374z"/>
        	<path d="M43.026,29.858c0-5.972-4.009-11.302-9.749-12.962c-0.53-0.151-1.084,0.152-1.238,0.684   c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04   c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039   C39.018,41.159,43.026,35.829,43.026,29.858z"/>
          </svg>
        );
      }


    return (
      <div>
        <div className="player">
          {this.songInfo()}
          <div className="controls">
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

        <Link to="/queue"><img className='queue-button' src={window.playlist}/></Link>

        <div className='volume' onClick={this.volumeBarUpdate.bind(this)}>

          {volume}
            <div ref={this.volumeBar} className='volume-bar'>
              <div style={{ width: (this.state.volume * 100) + '%' }}></div>
            </div>

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
    playing: state.ui.mediaplayer.playing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayingSong: id => dispatch(fetchPlayingSong(id)),
    toggleSong: () => dispatch(toggleSong()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Webplayer);
