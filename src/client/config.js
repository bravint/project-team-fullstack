const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const USER_URL = {
    USER_ROOT: `${SERVER_URL}/user/`,
    REGISTER: `${SERVER_URL}/user/register`,
    LOGIN: `${SERVER_URL}/user/login`,
    PROFILE: `${SERVER_URL}/user/profile`,
    POKEMON: `${SERVER_URL}/pokemon/`,
    POKEMON_RATING: `${SERVER_URL}/pokemon/ratin`,
};

const FORUM_URL = {
    POST: `${SERVER_URL}/post`,
    COMMENT: `${SERVER_URL}/post/comment`,
};

const PAGE_LINK = {
    HOME: '/',
    CREATE_PROFILE: '/register/profile',
    CREATE_USER: '/register/user',
    LOGIN: '/login',
    FORUM: '/forum',
    LEADERBOARD: '/leaderboard',
    NOT_FOUND: '*',
    PROFILE: '/profile',
};

const LOCAL_STORAGE = {
    TOKEN: 'token',
    USER_ID: 'userId',
};

const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

module.exports = {
    USER_URL,
    PAGE_LINK,
    LOCAL_STORAGE,
    HTTP_METHOD,
    FORUM_URL,
};
