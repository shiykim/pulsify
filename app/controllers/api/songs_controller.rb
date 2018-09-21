class Api::SongsController < ApplicationController

  def index
    @songs = Song.with_attached_photo.includes(:artist, album: [photo_attachment: :blob])
  end

  def show
    @song = Song.find(params[:id])
  end

end
