class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_photo.includes(:songs, :artist)
  end

  def show
    @album = Album.with_attached_photo.includes(:songs, :artist).find(params[:id])
  end

end
