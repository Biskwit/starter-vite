import { defineStore } from "pinia";

export type RootState = {
    authToken: string;
    logged: boolean;
};

export const store = defineStore({
    id: "main",
    state: () => ({
        authToken: "",
        logged: false
    } as RootState),
    actions: {
        setAuthToken(newToken: string) {
            this.authToken = newToken
        },
        setLogged(val : boolean) {
            this.logged = val
        }
    },
    persist: true
});