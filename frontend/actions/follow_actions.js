import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = payload => ({
  type: RECEIVE_FOLLOW,
  payload
});

export const removeFollow = payload => ({
  type: REMOVE_FOLLOW,
  payload
});

export const follow = (followableId, followableType) => {
  return dispatch => {
    return FollowApiUtil.follow(followableId, followableType).then( payload => {
      return dispatch(receiveFollow(payload));
    });
  };
};

export const unfollow = (followableId, followableType) => {
  return dispatch => {
    return FollowApiUtil.unfollow(followableId, followableType).then( payload => {
      return dispatch(removeFollow(payload));
    });
  };
};
