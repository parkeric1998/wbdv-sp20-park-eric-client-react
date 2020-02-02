import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
const CourseEditorComponent = ({hideEditor}) =>
    <div>
        <button onClick ={hideEditor}>Close</button>
        <h3>Course Editor</h3>
        <div className ="row">
            <div className ="col-4">
                <ModuleListComponent
                    modules = {[
                            {id:"123", title: "CSS"},
                    {id:"234", title: "HTML"},
                    {id:"345", title: "REACT"}
                    ]}/>
            </div>
            <div className ="col-4">
                <LessonTabs/>
                <TopicPills/>
            </div>
        </div>
    </div>

export default CourseEditorComponent