import React from "react";

const ModuleListComponent = ({modules}) =>
    <ul>
        {modules.map(module =>
            <div className="row">
                <div class = "col-11">
                    {module.title}
                </div>
            </div>
        )}
    </ul>

export default ModuleListComponent