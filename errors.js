const SMIM_ERRORS = {
    AUTH_REQUIRED: {
        title: "Authentication required",
        message: "SMIM needs an authenticated session."
    },

    AUTH_FAILED: {
        title: "Authentication failed",
        message: "The authentication request was rejected."
    },

    SESSION_EXPIRED: {
        title: "Session expired",
        message: "Your session is no longer valid."
    },

    FORBIDDEN: {
        title: "Access denied",
        message: "The requested data is not available to this account."
    },

    NETWORK_OFFLINE: {
        title: "No network connection",
        message: "SMIM cannot reach the required service."
    },

    API_UNAVAILABLE: {
        title: "Service unavailable",
        message: "The Magister service could not be reached."
    },

    BAD_RESPONSE: {
        title: "Invalid response",
        message: "The service returned data SMIM could not understand."
    },

    RATE_LIMITED: {
        title: "Too many requests",
        message: "SMIM has been temporarily rate limited."
    },

    UNKNOWN_ERROR: {
        title: "Unknown error",
        message: "Something unexpected happened."
    }
};

function handleSMIMError(type, details = "") {
    const error = SMIM_ERRORS[type] || SMIM_ERRORS.UNKNOWN_ERROR;

    console.error("[SMIM]", {
        type,
        ...error,
        details
    });

    return {
        type,
        title: error.title,
        message: error.message,
        details
    };
}