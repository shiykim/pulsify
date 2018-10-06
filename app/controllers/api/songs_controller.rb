class Api::SongsController < ApplicationController

  def index
    @songs = Song.with_attached_photo.includes(:artist, album: [photo_attachment: :blob])
  end

  def show
    @song = Song.find(params[:id])
  end

  def follow
    @follow = Follow.new(user_id: current_user.id, followable_type: 'Song', followable_id: params[:followable_id])
    if @follow.save
      render "api/follows/follow_show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @unfollow = Follow.find_by(user_id: current_user.id, followable_type: 'Song', followable_id: params[:followable_id])
    @unfollow.destroy
    render "api/follows/follow_show"
  end

end
