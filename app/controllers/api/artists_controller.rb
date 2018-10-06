class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.with_attached_photo.includes(:songs, :albums)
  end

  def show
    @artist = Artist.with_attached_photo.includes(:songs, :albums).find(params[:id])
  end

  def follow
    @follow = Follow.new(user_id: current_user.id, followable_type: 'Artist', followable_id: params[:followable_id])
    if @follow.save
      render @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @unfollow = Follow.find_by(user_id: current_user.id, followable_type: 'Artist', followable_id: params[:followable_id])
    @unfollow.destroy
    render json: @unfollow
  end

end
