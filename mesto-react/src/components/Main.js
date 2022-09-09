import { useEffect, useState } from "react"
import { api } from "../utils/api"

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState()

    useEffect(() => {
        api.getProfileInfo()
            .then((res) => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch((err) => {
                console.log(err) // выведем ошибку в консоль
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__image" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
                <div className="profile__name-container">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
                debugger
            </section>
            <section>
                <ul className="gallery"></ul>
            </section>
        </main>
    )
}

export default Main 