import React from "react";

const LessonTabs = ({lessons}) =>
    // <ul>
    //     <li> Lesson 1</li>
    //     <li> Lesson 2</li>
    //     <li> Lesson 3</li>
    // </ul>

    <div class="row">
        {lessons.map(lesson =>
            <div className="col-2">
                <h3>
                    {lesson.title}
                </h3>
            </div>
        )}
    </div>


export default LessonTabs