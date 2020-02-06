import React from "react";
import './CourseEditorComponent.css'

const ModuleListComponent = ({modules}) =>
    <ul>
        {modules.map(module =>
            <div className="row">
                <div class = "col-11 wbdv-module-item">
                    {module.title}
                </div>
            </div>
        )}
    </ul>

export default ModuleListComponent