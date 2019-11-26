import Vue from 'vue';

const state = {
    basketItemCount: 0
};

const getters = {
    getBasketItemCount(state) {
        return state.basketItemCount;
    }
};

const mutations = {
    setBasketItemCount(state, val) {
        state.basketItemCount = val;
    },
};

const actions = {
    getBasketItemCount({ commit }, payload) {
        Vue.http.get("basket/count", { params: { userId: payload.userId } }
        ).then(response => {
            console.log(response.body.Result);
            commit("setBasketItemCount", response.body.Result);
        }
        );
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};