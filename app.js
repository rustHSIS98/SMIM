const SMIM = {
    data: {
        schedule: [],
        grades: [],
        homework: [],
        messages: []
    },

    loading: false,

    async start() {
        try {
            this.loading = true;

            const auth = await Auth.login();

            if (!auth.success) {
                throw new Error("Authentication failed");
            }

            this.data = await MagisterAPI.getAllData();

            console.log("[SMIM] Data loaded:", this.data);

            this.loading = false;

            this.refreshUI();

        } catch (error) {
            this.loading = false;

            handleSMIMError(
                "UNKNOWN_ERROR",
                error.message
            );
        }
    },

    refreshUI() {
        console.log("[SMIM] UI refresh requested");

        /*
         * Your existing UI rendering code will eventually
         * move into here.
         */
    }
};

document.addEventListener("DOMContentLoaded", () => {
    SMIM.start();
});