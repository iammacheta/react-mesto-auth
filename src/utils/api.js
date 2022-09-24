import { token } from "./constants"

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    updateProfileInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    addNewCard({ name, url }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: url
            })
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    deleteCardFromServer({ cardID }) {
        return fetch(`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    changeLikeCardStatus({ cardID, isLiked }) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
                .then((res) => {

                    return this._getResponseData(res)
                })
        } else {
            return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
                method: 'PUT',
                headers: this._headers
            })
                .then((res) => {

                    return this._getResponseData(res)
                })
        }
    }

    updateAvatar({ avatarLink }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarLink
            })
        })
            .then((res) => {
                return this._getResponseData(res)
            })
    }

    _getResponseData(res) {
        if (res.ok) {

            return res.json()
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`)
    }


}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
    headers: {
        authorization: token,
        'Content-Type': 'application/json'
    }
})

export { api }