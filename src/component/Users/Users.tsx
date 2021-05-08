import React from "react";
import styles from "./users.module.css";
import usersPhoto from "../../assests/image/no_avatar.png";
import {UsersPropsType} from "./UsersContainer";

export type OnPageChangedType = {
    onPageChanged: (page: number) => void
}

export const Users = (props: UsersPropsType & OnPageChangedType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p ? styles.selected_page : ""}
                        onClick={() => {
                            props.onPageChanged(p)
                        }
                        }>{p}</span>
                })}
            </div>
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