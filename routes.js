// Global

const HOME = "/",
  JOIN = "/join",
  LOGIN = "/login",
  LOGOUT = "/logout",
  SEARCH = "/search";

// Users

const USERS = "/users",
  EDIT_PROFILE = "/edit-profile",
  CHANGE_PASSWORD = "/change-password",
  USER_DETAIL = "/:id";

// Videos

const VIDEOS = "/videos",
  UPLOAD = "/upload",
  VIDEO_DETAIL = "/:id",
  EDIT_VIDEO = "/:id/edit",
  DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: USER_DETAIL,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
