const WebSocket = require('isomorphic-ws')

export const state = () => ({
    ws: null,
    wsAddress: 'ws://192.168.137.1:49122',
    counter: 0,
    state: {},
    events: []
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    newWs(state, ws) {
        state.ws = ws
    },
    newEvent(state, e) {
        state.events.append(e)
    },
    newState(state, newState) {
        state.state = newState
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
        const data = JSON.parse(message.data)
        console.log('message', data)
        commit('newEvent', data)
        if (data.event == 'game:update_state') {
            commit('newState', data.data)
        }
    }
}
