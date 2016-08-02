{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      }
    }
  },
  modal: {
    duck,
    isOpen,

  }
  ducks: {
    [duckId]:{
      lastUpdated,
      info: {
        avatar,
        duckId,
        name,
        text,
        timestamp,
        uid,
      }
    }
  },
  usersDucks: {
    isFetching,
    error,
    lastUpdated,
    [uid]: {
      duckIds: [duckId, duckId, duckId]
    }
  },
  likeCount: {
    [duckId]: 0
  },
  usersLikes: {
    [duckId]: true
  },
  replies: {
    isFetching,
    error,
    [duckId]: {
      replies: {
        lastUpdated
        [replyId]: {
          name,
          comment,
          uid,
          timestamp,
          avatar,
        }
      }
    }
  },
  listeners: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdstoAdd: [duckId, duckId],
    duckIds: [duckId, duckId]
  }
}
