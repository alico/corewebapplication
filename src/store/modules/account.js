const state = {
    isLogged: false,
    user: {},

};

const getters = {
    getIslogged(state) {
        return state.isLogged;
    },
    getUserNameDisplay(state) {
        return state.user.name + ' ' + state.user.surname;
    },
    getServerTime(state) {
        return state.serverTime;
    },
    getUser(state) {
        return state.user;
    }
};

const mutations = {
    login(state, val) {
        state.user = val;
        state.isLogged = true;
    },
    logOut(state) {
        state.user = null;
        state.isLogged = false;
    }
};


const actions = {
   
};


export default {
    state,
    getters,
    mutations,
    actions
};