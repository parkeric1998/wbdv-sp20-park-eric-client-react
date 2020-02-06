import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";

const CourseEditorComponent = ({hideEditor}) =>
    <div>
        <div class="row">
            <div class="col-1">
                <i className="fa-2x fa fa-times"
                   onClick={hideEditor}/>
            </div>
            <div class="col-2">
                <h3>Course Editor</h3>
            </div>
            <div class ="col-8">
                <LessonTabs
                    lessons={[
                        {id: "1", title: "Build"},
                        {id: "2", title: "Pages"},
                        {id: "3", title: "Theme"},
                        {id: "4", title: "Store"},
                        {id: "5", title: "Apps"},
                        {id: "6", title: "Settings"}
                    ]}
                />
            </div>

        </div>


        <div className="row">
            <div className="col-4">
                <ModuleListComponent
                    modules={[
                        {id: "1", title: "Module 1 - jQuery"},
                        {id: "2", title: "Module 2 - React"},
                        {id: "3", title: "Module 3 - Redux"},
                        {id: "4", title: "Module 4 - Native"},
                        {id: "5", title: "Module 5 - Angular"},
                        {id: "6", title: "Module 6 - Node"},
                        {id: "7", title: "Module 7 - Mongo"}
                    ]}/>
            </div>
            <div className="col-8">

                <TopicPills
                    topics={[
                        {id: "1", title: "Topic 1"},
                        {id: "2", title: "Topic 2"},
                        {id: "3", title: "Topic 3"},
                        {id: "4", title: "Topic 4"}
                    ]}

                />
                <WidgetList/>
            </div>
        </div>
    </div>

export default CourseEditorComponent