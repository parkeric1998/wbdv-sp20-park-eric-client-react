import React from "react";

const LessonTabs = ({lessons}) =>
    // <ul>
    //     <li> Lesson 1</li>
    //     <li> Lesson 2</li>
    //     <li> Lesson 3</li>
    // </ul>

    <div class= "row">
        {lessons.map(lesson =>
            <div className="col-2">
                {lesson.title}
            </div>
        )}
    </div>


export default LessonTabs