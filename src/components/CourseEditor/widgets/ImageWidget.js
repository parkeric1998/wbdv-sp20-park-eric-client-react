import React from "react";
class ImageWidget extends React.Component {

    state = {
        widget: this.props.widget,
        url: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                        {this.props.widget.title}
                        <form>
                            <input
                                onChange={e => this.handleChange(e)}
                                value={this.state.url}
                                name="url"
                                placeholder= "www.imageurl.com"
                            />
                            <div>
                                <input
                                    onChange={(e) => {
                                        const newTitle = e.target.value;
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                title: newTitle
                                            }
                                        }))
                                    }
                                    }
                                    value={this.state.widget.title}/>
                            </div>
                        </form>
                        <img
                            src={this.state.url}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ImageWidget
