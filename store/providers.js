export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add (state, name) {
      state.list.push({
        name,
        done: false
      })
    },
    remove (state, { provider }) {
      state.list.splice(state.list.indexOf(provider), 1)
    },
    toggle (state, provider) {
      provider.done = !provider.done
    }
  }