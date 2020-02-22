import React from "react";

// export const ParagraphWidget=({widget}) =>
//     <h1> PARAGRAPH {widget.title} </h1>

export const ParagraphWidget = ({widget, editing}) =>
    <div>
        {
            !editing &&
            <div>
                <p>{widget.title}</p>
            </div>
        }
        {
            editing &&
            <div>
                <textarea>{widget.title}</textarea>
            </div>
        }
    </div>