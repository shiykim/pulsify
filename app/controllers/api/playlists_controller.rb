class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all.includes(:playlist_songs, :author, songs: [:artist, :album])
    # @songs = Song.with_attached_photo
  end

  def show
    @playlist = Playlist.includes(:playlist_songs, :author, songs: [:artist, :album]).find(params[:id])
    @username = User.find(@playlist.author_id)
    @songs = Song.all
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = current_user.playlists.find(params[:id])
    if @playlist.update_attributes(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  def playlist_params
    params.require(:playlist).permit(:title)
  end


  def add_playlist_song
    @playlist_song = PlaylistSong.new(playlist_id: params[:playlist_id], song_id: params[:song_id])
    if @playlist_song.save
      render "api/playlists/playlistsong_show"
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy_playlist_song
    @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id], song_id: params[:song_id])
    @playlist_song.destroy
    render "api/playlists/playlistsong_show"
  end

  def follow
    @follow = Follow.new(user_id: current_user.id, followable_type: 'Playlist', followable_id: params[:followable_id])
    if @follow.save
      render @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @unfollow = Follow.find_by(user_id: current_user.id, followable_type: 'Playlist', followable_id: params[:followable_id])
    @unfollow.destroy
    render json: @unfollow
  end

end
