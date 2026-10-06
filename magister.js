const MagisterAPI = {
    async getSchedule() {
        return [
            {
                time: "08:30",
                subject: "Wiskunde",
                teacher: "Dhr. Jansen",
                room: "B214"
            },
            {
                time: "09:20",
                subject: "Nederlands",
                teacher: "Mevr. De Vries",
                room: "A103"
            },
            {
                time: "10:20",
                subject: "Engels",
                teacher: "Dhr. Smith",
                room: "C201"
            }
        ];
    },

    async getGrades() {
        return [
            {
                subject: "Wiskunde",
                grade: "8.4",
                date: "06-10-2026"
            },
            {
                subject: "Nederlands",
                grade: "7.8",
                date: "05-10-2026"
            },
            {
                subject: "Engels",
                grade: "9.1",
                date: "03-10-2026"
            }
        ];
    },

    async getHomework() {
        return [
            {
                subject: "Wiskunde",
                title: "Opgaven hoofdstuk 4",
                due: "07-10-2026",
                completed: false
            },
            {
                subject: "Nederlands",
                title: "Leesverslag",
                due: "09-10-2026",
                completed: true
            }
        ];
    },

    async getMessages() {
        return [
            {
                sender: "Dhr. Jansen",
                subject: "Toets hoofdstuk 4",
                date: "06-10-2026",
                read: false
            }
        ];
    },

    async getAllData() {
        const [
            schedule,
            grades,
            homework,
            messages
        ] = await Promise.all([
            this.getSchedule(),
            this.getGrades(),
            this.getHomework(),
            this.getMessages()
        ]);

        return {
            schedule,
            grades,
            homework,
            messages
        };
    }
};