export const state = () => ({
  todos: [],
  count: 0  
})

export const getters = {

}

export const mutations = {
    saveInfo(state, payload) {
        state.provider.push(payload.provider);
    },
    increment (state) {
        console.log("inside state inc" + state.cont);
        state.count++;
    }
}

export const actions = {
  
}