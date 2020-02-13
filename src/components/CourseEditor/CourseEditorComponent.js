import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";
import './CourseEditorComponent.css'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({hideEditor, courseId, moduleId, history}) =>
    <Provider store={store}>
        <div>
            <div className="row"
                 id="wbdev-title">
                <div className="col-1">
                    <i className="fa-2x fa fa-times"
                       onClick={() => history.push("/")}/>
                </div>
                <div className="col-2">
                    <h3>{courseId}</h3>
                </div>
                <div className="col-8">
                    <LessonTabs
                        moduleId={moduleId}
                    />
                </div>
                <div className="col-1">
                    <i className="fa-3x fa fa-plus"></i>
                </div>
            </div>
            <div className="row row-widget">
                <div className="col-4 box">
                    <ModuleListContainer
                        courseId={courseId}
                        moduleId={moduleId}
                        history={history}/>
                </div>
                <div className="col-8">

                    <TopicPills
                        topics={[
                            {_id: "1", title: "Topic 1"},
                            {_id: "2", title: "Topic 2"},
                            {_id: "3", title: "Topic 3"},
                            {_id: "4", title: "Topic 4"}
                        ]}
                    />
                    <WidgetList/>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditorComponent