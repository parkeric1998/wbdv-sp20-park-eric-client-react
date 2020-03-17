import React from "react";

class ListWidget extends React.Component {
    state = {
        widget: this.props.widget,
        text: '',
        type: "UNORDERED"

    }


    render() {
        return (
            <div>
                {
                    !this.props.editing &&
                    <div>
                        {this.props.widget.title}
                    </div>
                }
                {
                    this.props.editing &&
                    <div>
                        <div>
                            {this.props.widget.title}
                        </div>

                        <div>

                    <textarea
                        onChange={(e) => {
                            const text = e.target.value;
                            this.setState(prevState => ({
                                text: text
                            }))
                        }}>


                </textarea>
                        </div>
                        <select onChange={(e) => {
                            const newType = e.target.value
                            this.setState((e) => ({
                                type: newType
                            }))
                        }}
                                value={this.state.type}>
                            <option value="UNORDERED">Unordered List</option>
                            <option value="ORDERED">Ordered List</option>
                        </select>
                        {
                            this.state.type === "UNORDERED" &&
                            <ul>
                                {this.state.text.split("\n").map((item) => {
                                        return <li>
                                            {item}
                                        </li>
                                    }
                                )}

                            </ul>

                        }

                        {
                            this.state.type === "ORDERED" &&
                            <ol>
                                {this.state.text.split("\n").map((item) => {
                                        return <li>
                                            {item}
                                        </li>
                                    }
                                )}

                            </ol>

                        }

                    </div>
                }
            </div>
        );
    }
}

export default ListWidget