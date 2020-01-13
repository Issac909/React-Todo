import React from 'react'

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.text);
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                type = 'text'
                name = 'item'
                value = {this.state.text}
                onChange = {this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default ToDoForm;