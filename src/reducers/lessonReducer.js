const lessonReducer =(state,action) =>{
    return{
        lessons: [
            {_id: "1", title: "Build"},
            {_id: "2", title: "Pages"},
            {_id: "3", title: "Theme"},
            {_id: "4", title: "Store"},
            {_id: "5", title: "Apps"},
            {_id: "6", title: "Settings"}
        ]
    }
}

export default lessonReducer