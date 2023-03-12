import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        posts: [],
        post: {},
    },
    getters: {
    },
    mutations: {
        setPosts(state, data) {
            state.posts = data
        },

        setPost(state, data) {
            state.post = data
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            const { data } = await axios({
                method: 'get',
                url: 'https://640aeeda81d8a32198d473ee.mockapi.io/posts'
                // url: 'https://640aeeda81d8a32198d473ee.mockapi.io/posts?sortBy=createdAt&order=desc'
            })

            // console.log(data, '<-----');
            // const posts = await data.json()
            commit('setPosts', data)
            console.log('ini udah selesai fetch');
        },

        async deletePost({ commit }, id) {
            const { data } = await axios({
                method: 'delete',
                url: `https://640aeeda81d8a32198d473ee.mockapi.io/posts/${id}`
            })
            commit('setPosts', data)

        },

        async createPost({ commit }, formPost) {
            console.log('masuk======');
            try {
                console.log(formPost);
                console.log('masuk======2222222222222');
                const { data } = await axios({
                    method: 'post',
                    url: `https://640aeeda81d8a32198d473ee.mockapi.io/posts`,
                    data: formPost
                })
                // this.$router.push('/posts')
                commit('setPosts', data)
            } catch (error) {
                console.log(error, '<---- ini error createpost');
            }
        },

        async fetchById({ commit }, id) {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: `https://640aeeda81d8a32198d473ee.mockapi.io/posts/${id}`,
                })
                commit('setPost', data)
            } catch (error) {
                console.log(error, '<---- ini error fetchById');
            }
        },

        async editPost({ commit }, {formPost, paramId}) {
            console.log(paramId, formPost, '<---- ini id dan formPost');
            try {
                const { data } = await axios({
                    method: 'put',
                    url: `https://640aeeda81d8a32198d473ee.mockapi.io/posts/${paramId}`,
                    data: formPost
                })
                commit('setPosts', data)
            } catch (error) {
                console.log(error, '<---- ini error editPost');
            }
        }
    },

    modules: {
    }
})

// import { createStore } from "vuex";

// const store = createStore({
//     state() {

//     }
// })


// =========================


// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         posts: []
//     },
//     mutations: {
//         setData(state, data) {
//             state.posts = data
//         }
//     },
//     actions: {
//         fetchData({ commit }) {
//             axios.get('https://640aeeda81d8a32198d473ee.mockapi.io/posts')
//                 .then(response => {
//                     console.log(response.data, '<==== MASUK');
//                     commit('setData', response.data)
//                 })
//         }
//     }
// })

// export default store

// =========================

// import { createApp } from 'vue'
// import { createStore } from 'vuex'
// import axios from 'axios'

// // Create a new store instance.
// const store = createStore({
//     state() {
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }
// })

// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)

// =========================


// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         posts: []
//     },
//     mutations: {
//         setPosts(state, data) {
//             state.posts = data
//         }
//     },
//     actions: {
//         async fetchPosts({ commit }) {
//             const response = await fetch('https://640aeeda81d8a32198d473ee.mockapi.io/posts')
//             const posts = await response.json()
//             commit('setPosts', posts)
//         }
//     }
// })


// =========================


