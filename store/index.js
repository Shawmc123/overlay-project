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
        // state.events.append(e)
    },
    newState(state, newState) {
        state.state = newState
    }
}

export const actions = {
    async initWebsocket({commit, state, dispatch}) {
        commit('newWs', new WebSocket(state.wsAddress))
        console.log('ws', state.ws)
        state.ws.onclose = (e) => console.log('onclose', e)
        state.ws.onerror = (e) => console.log('onerror', e)
        state.ws.onopen = (e) => console.log('onopen', e)
        state.ws.onmessage = (e) => dispatch('processMessage', e)
    },
    async initFakeData({state,commit}) {
        commit('newState', JSON.parse('{"ws":"[object WebSocket]","wsAddress":"ws://192.168.137.1:49122","counter":0,"state":{"event":"gamestate","game":{"arena":"Park_P","ball":{"location":{"X":-1184.952880859375,"Y":-788.2466430664062,"Z":93.06232452392578},"speed":72,"team":1},"hasTarget":true,"hasWinner":false,"isOT":false,"isReplay":false,"target":"Gerwin_3","teams":[{"color_primary":"1873FF","color_secondary":"E5E5E5","name":"BLUE","score":0},{"color_primary":"C26418","color_secondary":"E5E5E5","name":"ORANGE","score":1}],"time_milliseconds":28.23291015625,"time_seconds":29,"winner":""},"hasGame":true,"match_guid":"2D03F0D611EC44B76AFFB883B470F79B","players":{"Armstrong_5":{"assists":1,"attacker":"","boost":0,"cartouches":2,"demos":0,"goals":0,"hasCar":true,"id":"Armstrong_5","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-352.987548828125,"Y":4221.99560546875,"Z":17.010000228881836,"pitch":-100,"roll":-2,"yaw":-19882},"name":"Armstrong","onGround":true,"onWall":false,"primaryID":"0","saves":0,"score":52,"shortcut":5,"shots":0,"speed":34,"team":1,"touches":3},"Gerwin_3":{"assists":0,"attacker":"","boost":24,"cartouches":4,"demos":0,"goals":0,"hasCar":true,"id":"Gerwin_3","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-289.0622863769531,"Y":723.9788818359375,"Z":16.99858283996582,"pitch":-100,"roll":1,"yaw":-13581},"name":"Gerwin","onGround":true,"onWall":false,"primaryID":"0","saves":0,"score":0,"shortcut":3,"shots":0,"speed":50,"team":0,"touches":1},"Heater_6":{"assists":0,"attacker":"","boost":90,"cartouches":8,"demos":0,"goals":0,"hasCar":true,"id":"Heater_6","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-666.4041137695312,"Y":959.5150756835938,"Z":18.801315307617188,"pitch":49,"roll":0,"yaw":-10553},"name":"Heater","onGround":true,"onWall":false,"primaryID":"0","saves":0,"score":26,"shortcut":6,"shots":0,"speed":39,"team":1,"touches":11},"Khan_7":{"assists":0,"attacker":"","boost":33,"cartouches":3,"demos":0,"goals":1,"hasCar":true,"id":"Khan_7","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-1652.947265625,"Y":609.7796020507812,"Z":106.23910522460938,"pitch":2715,"roll":-7356,"yaw":-22396},"name":"Khan","onGround":false,"onWall":false,"primaryID":"0","saves":0,"score":124,"shortcut":7,"shots":1,"speed":40,"team":1,"touches":6},"Maverick_1":{"assists":0,"attacker":"","boost":0,"cartouches":8,"demos":0,"goals":0,"hasCar":true,"id":"Maverick_1","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-769.889892578125,"Y":728.9800415039062,"Z":34.99618911743164,"pitch":1372,"roll":3160,"yaw":-2353},"name":"Maverick","onGround":false,"onWall":false,"primaryID":"0","saves":0,"score":0,"shortcut":1,"shots":0,"speed":26,"team":0,"touches":0},"Stinger_2":{"assists":0,"attacker":"","boost":0,"cartouches":7,"demos":0,"goals":0,"hasCar":true,"id":"Stinger_2","isDead":false,"isPowersliding":false,"isSonic":false,"location":{"X":-104.77030944824219,"Y":-344.587158203125,"Z":17.009992599487305,"pitch":-100,"roll":0,"yaw":-17561},"name":"Stinger","onGround":true,"onWall":false,"primaryID":"0","saves":0,"score":6,"shortcut":2,"shots":0,"speed":63,"team":0,"touches":9}}},"events":[]}').state )
    },
    async processMessage({commit}, message) {
        const data = JSON.parse(message.data)
        commit('newEvent', data)
        if (data.event == 'game:update_state') {
            commit('newState', data.data)
        } else {
            console.log('message', data)
        }
    }
}
