const WebSocket = require('isomorphic-ws')

export const state = () => ({
    ws: null,
    wsAddress: 'ws://192.168.137.1:49122',
    counter: 0,
    state: {}
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    newWs(state, ws) {
        state.ws = ws
    }
}

export const actions = {
    async initWebsocket({commit, state, dispatch}) {
        commit('newWs', new WebSocket(state.wsAddress))
        state.ws.onclose = (e) => console.log('onclose', e)
        state.ws.onerror = (e) => console.log('onerror', e)
        state.ws.onopen = (e) => console.log('onopen', e)
        state.ws.onmessage = (e) => dispatch('processMessage', e)
    },
    async processMessage({commit}, message) {
        console.log('message', JSON.parse(message.data))
        
    }

}
