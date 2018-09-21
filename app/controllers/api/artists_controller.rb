class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.with_attached_photo.includes(:songs, :albums)
  end

  def show
    @artist = Artist.with_attached_photo.includes(:songs, :albums).find(params[:id])
  end

end
