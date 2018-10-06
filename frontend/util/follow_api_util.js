export const follow = (followableId, followableType) => {
  return $.ajax({
    method: 'POST',
    url: `/api/${followableType}/follow/${followableId}`,
    data: {
      followable_id: followableId,
    }
  });
};

export const unfollow = (followableId, followableType) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/${followableType}/unfollow/${followableId}`,
    data: {
      followable_id: followableId,
    }
  });
};
