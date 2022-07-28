import router from '../../router'
import Axios from 'axios';

export function login({ commit }) {
    let url = 'https://randomuser.me/api/';
    Axios.get(url).then(function (response) {
        let userData = {
            displayName: response.data.results[0].name.first,
            email: response.data.results[0].email,
            photoURL: response.data.results[0].picture.thumbnail,
            uid: response.data.results[0].login.uuid
        }

        /* isLogged is for Guard navigation routes which is currently not working */
        let isLogged = true;

        commit("setUserData", userData)
        commit("isLogged", isLogged)
        router.push('/home')
    })
        .catch(function (error) {
            console.log(error)
        });
}

export function logout( {commit}) {
    let url = 'https://randomuser.me/api/';
    Axios.get(url).then(function () {
        let userData = {}

        let isLogged = false;

        commit("setUserData", userData)
        commit("isLogged", isLogged)
        router.push('/')
    })
}

