if @follow
  json.id @follow.id
  json.followableId @follow.followable_id
  json.followableType @follow.followable_type
  json.currentUser current_user.id
end
