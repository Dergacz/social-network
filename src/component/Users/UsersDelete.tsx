import React from "react";
import styles from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import usersPhoto from "../../assests/image/no_avatar.png"

export const UsersDelete = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.usersPage.length === 0
        ) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })

        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null
                                ? u.photos.small
                                : usersPhoto
                            }
                                 alt={"Photo"} className={styles.usersPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unFollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                              <div>{"u.location.country"}</div>
                              <div>{"u.location.city"}</div>
                        </span>


                    </span>
                </div>)
            }
        </div>
    )
}


// [
//     {
//         id: 1,
//         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPytdJm408MhFkOS0iBwFQdfFvMvSExabbKA8BdTVerLaMy9Fig71JZm0uJPI0ot24sNs&usqp=CAU",
//         followed: false,
//         name: "Kyle",
//         status: "student",
//         location: {city: "Colorado", country: "USA"},
//     },
//     {
//         id: 2,
//         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq1u8oBhFuEqkoPQtH5LmvpaCd1od7fYq5A&usqp=CAU",
//         followed: true,
//         name: "Butters",
//         status: "student",
//         location: {city: "Colorado", country: "USA"},
//     },
// ]