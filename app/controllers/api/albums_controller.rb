class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_photo.includes(:songs, :artist)
  end

  def show
    @album = Album.with_attached_photo.includes(:songs, :artist).find(params[:id])
  end

  def follow
    @follow = Follow.new(user_id: current_user.id, followable_type: 'Album', followable_id: params[:followable_id])
    if @follow.save
      render @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @unfollow = Follow.find_by(user_id: current_user.id, followable_type: 'Album', followable_id: params[:followable_id])
    @unfollow.destroy
    render json: @unfollow
  end


end
