var keyMirror = require('fbjs/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
    PRELOAD           	        : null,
    ON_POPSTATE                 : null,
    SET_PAGE          	        : null,
    MAIN_MODULE       	        : null,
    CLOSE_MODULE      	        : null,
    SHOW_FILEMANAGER            : null,
    SHOW_TICKETS                : null,
    FM_SAVE_FILE                : null,
    SIGN_IN           	        : null,
    SIGN_IN_FB        	        : null,
    SIGN_IN_GP        	        : null,
    MAIN_FOLLOW                 : null,
    LOAD_KICKSTARTER            : null,
    JOURNAL_CONTENT   	        : null,
    SEARCH_CONTENT              : null,
    VIEW_CONTENT                : null,
    ANALYTICS_CONTENT           : null,
    VIEW_WATCH_PROTOCOL         : null,
    JOURNAL_SIDEBAR   	        : null,
    TOGGLE_IMG_LIGHTBOX         : null,
    JOURNAL_WINDOWRUN           : null,
    GET_PREVIOUS_NEWS           : null,
    VIEW_SIDEBAR                : null,
    JOURNAL_ACTIVEWIN           : null,
    EXPLORE_LOAD                : null,
    LOAD_GROUP			        : null,
    CREATE_GROUP                : null,
    GROUP_UPDATE                : null,
    GROUP_DELETE                : null,
    GROUP_NEW_THREAD            : null,
    GROUP_NEWS_THREAD           : null,
    GROUP_MODIFY_THREAD         : null,
    GROUP_NEW_THREAD_COMMENT    : null,
    GROUP_MODIFY_THREAD_COMMENT : null,
    GROUP_LOAD_COMMENTS         : null,
    GROUP_ADD_NEWS              : null,
    GROUP_MODIFY_NEWS           : null,
    GROUP_GET_THREADS           : null,
    GROUP_GET_ONE_THREAD        : null,
    GROUP_RATE_THREAD           : null,
    GROUP_MEMBER_JOIN           : null,
    GROUP_USER_STATUS           : null,
    GROUP_USER_ACCESS           : null,
    GROUP_INVITE_USER           : null,
    GROUP_CHANGE_FAMILY_GROUP   : null,
    GROUP_ADD_JOB               : null,
    GROUP_GET_JOBS              : null,
    GROUP_GET_ONE_JOB           : null,
    GROUP_MODIFY_JOB            : null,
    GROUP_JOB_APPLY             : null,
    GROUP_ADD_EVENT             : null,
    GROUP_GET_ONE_EVENT         : null,
    GROUP_MODIFY_EVENT          : null,
    GROUP_GET_EVENTS            : null,
    GROUP_GET_PROTOCOLS         : null,
    GROUP_GET_NEWS              : null,
    GROUP_GET_ONE_NEWS          : null,
    SHOW_VIEW_WINDOW            : null,
    CLOSE_VIEW_WINDOW           : null,
    VIEW                        : null,
    SEARCH                      : null,
    TICKETS_LOAD                : null,
    TICKETS_CLOSE               : null,
    TICKETS_SUBMIT              : null,
    TICKETS_LOAD_PUBLIC         : null,
    TICKETS_SUBMIT_PUBLIC       : null,
    TICKETS_SUBMIT_COMMENT      : null,
    TICKETS_RATE                : null,
    TICKETS_RATE_COMMENT        : null,
    PROFILE_LOAD                : null,
    PROFILE_PROTOCOLS_LOAD      : null,
    PROFILE_GROUPS_LOAD         : null,
    PROFILE_SAVE_SETTINGS       : null,
    PROFILE_FOLLOWING_LOAD      : null,
    PROFILE_FOLLOWERS_LOAD      : null,
    PROFILE_PUBCHASE_LOAD       : null,
    PROFILE_DELETE              : null,
    PROFILE_EMAIL_SETTINGS      : null,
    PROFILE_LOAD_NOTICES        : null,
    CHAT_INIT                   : null,
    CHAT_NEW_MSG                : null,
    CHAT_LEAVE                  : null,
    WELCOME_WIN                 : null,
    NOTICE_INIT                 : null,
    NOTICE_CHECK                : null,
    NOTICE_CHECK_ALL            : null,
    LOAD_NOTIFICATIONS          : null,
    VIEW_LOAD_STEPS             : null,
    VIEW_SAVE_STEPS             : null,
    VIEW_STORE_STEPS            : null,
    VIEW_LOAD                   : null,
    VIEW_GET_PROTOCOL           : null,
    VIEW_SAVE_PROTOCOL          : null
});
