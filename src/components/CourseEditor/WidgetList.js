import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import {ParagraphWidget} from "./widgets/ParagraphWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

class WidgetList extends React.Component {
    componentDidMount() {
        // this.props.findAllWidgets()
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {
            title: ''
        }
    }

    saveWidget = (widget) => {
        this.setState(prevState => {
            return {
                widget: widget
            }
        })
        this.props.updateWidget(widget.id, widget)
    }

    render() {
        return (
            <div>
                <h1>{this.props.topicId}</h1>
                {
                    this.props.widgets && this.props.widgets.length > 0 && this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            {widget.type === "HEADING"   && <HeadingWidget   saveWidget={this.saveWidget} editing={this.state.widget.id === widget.id} {...this.props} widget={widget}/>}
                            {widget.type === "PARAGRAPH" && <ParagraphWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                            {widget.type === "LIST" && <ListWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                            {widget.type === "IMAGE" && <ImageWidget updateWidget={this.updateWidget} editing={this.state.widget.id === widget.id} widget={widget}/>}
                            <span>
                                {   this.state.editingWidgetId !== widget.id &&
                                <button onClick={
                                    () => this.setState({
                                        editingWidgetId: widget.id,
                                        widget: widget
                                    })}>
                                    Edit
                                </button>
                                }
                                {   this.state.editingWidgetId === widget.id &&
                                <span>
                                        <button onClick={() => {
                                            this.props.deleteWidget(widget.id)
                                        }}>
                                            Delete
                                        </button>
                                        <button>Up</button>
                                        <button>Down</button>
                                        <select onChange={(e) => {
                                            const newType = e.target.value
                                            this.setState(prevState => {
                                                this.state.widget.type = newType;
                                                return {
                                                    widget: {
                                                        ...widget, type: newType
                                                    }
                                                }})
                                            this.props.updateWidget(this.state.widget.id, this.state.widget)
                                        }}
                                                value={this.state.widget.type}>
                                            <option value="HEADING">Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="LIST">List</option>
                                            <option value="IMAGE">Image</option>
                                        </select>
                                    </span>
                                }
                            </span>
                        </div>
                    )
                }
                <div>
                    <button
                        onClick={
                            () =>
                                this.props.createWidget(this.props.topicId,{title:"New Widget"})}>
                        Create Widget
                    </button>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, widget) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),
    deleteWidget: (wid) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE"
        }).then(response => response.json())
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetId: wid
            })),

    createWidget: (topicId,widget) =>
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),
    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
            })),
    findAllWidgets: () =>
        fetch("http://localhost:8080/widgets")
            .then(response => response.json())
            .then(actualWidgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WidgetList)