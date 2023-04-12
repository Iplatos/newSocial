const initialState = {
        posts: [
            {id: 1, message: "Hi! how are you?", likeCount: 23},
            {id: 2, message: "Do you love me?", likeCount: 33},
        ],
        newPostText: ""
}

export const profileReducer = (state = initialState, action: any) => {
    if (action.type === "ADD-POST") {
        let newPost = {id: 5, message: state.newPostText, likeCount: 3}
        state = {...state, posts: [...state.posts, newPost],newPostText: ""}


    } else if (action.type === "UPDATE-NEW_POST_TEXT") {
        state = {...state,newPostText: action.newText}

    }
    return state
}