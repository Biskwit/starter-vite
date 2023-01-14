import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';
import type { Store } from 'vuex';
import createPersistedState from "vuex-persistedstate"

export interface State {
    authToken: string;
    logged: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        authToken: "",
        logged: false,
    },
    mutations: {
        setAuthToken(state, newToken) {
            state.authToken = newToken
        },
        setLogged(state, val) {
            state.logged = val
        }
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],
});