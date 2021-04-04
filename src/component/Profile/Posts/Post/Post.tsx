import React from "react";
import classes from "./Post.module.css";


type  PostType = {
    message: string
    likes: number
}

const Post = (props: PostType) => {
    return (<div>
            <div className={classes.item}>
                {props.message}
            </div>
            <div>
                <img className={classes.img}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEf-tH83OnxYPOTYxw4P4FyGnc2ezlOnwuQ&usqp=CAU"/>
            </div>
            <div className={classes.item}>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}

export default Post;
