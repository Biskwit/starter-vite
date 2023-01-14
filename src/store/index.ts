import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';
import type { Store } from 'vuex';
import createPersistedState from "vuex-persistedstate"
import { Instance } from '../@types/Instance';
import { Volume } from '../@types/Volume';
import { sshKey } from '../@types/sshKey';
import { LoadBalancer } from '../@types/LoadBalancer';

export interface State {
    authToken: string;
    logged: boolean;
    instances: Instance[];
    volumes: Volume[];
    SSHKeys: sshKey[];
    loadBalancer: LoadBalancer[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        authToken: "",
        logged: false,
        instances: [],
        volumes: [],
        SSHKeys: [],
        loadBalancer: []
    },
    mutations: {
        setAuthToken(state, newToken) {
            state.authToken = newToken
        },
        setLogged(state, val) {
            state.logged = val
        },
        setInstances(state, val) {
            state.instances = val
        },
        setVolumes(state, val) {
            state.volumes = val
        },
        setSSHKeys(state, val) {
            state.SSHKeys = val
        }
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],
});