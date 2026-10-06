const Auth = {
    loggedIn: false,

    async login() {
        // Temporary development login.
        // Real authorized authentication will be added later.

        this.loggedIn = true;

        return {
            success: true
        };
    },

    logout() {
        this.loggedIn = false;
    },

    isAuthenticated() {
        return this.loggedIn;
    }
};