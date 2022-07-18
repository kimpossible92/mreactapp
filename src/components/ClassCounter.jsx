import React from "react";
class ClassCounter extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    Inc() {
        this.setState({count:this.state.count + 1});
    }
    Dec2(){
        this.setState({count:this.state.count - 1});
    }
    render() {
        return (
            <div>
                <h1>{this.count}</h1>
                <button onClick={this.Inc}>Increment</button>
                <button onClick={this.Dec2}>decrement</button>
            </div>
        );
    }
}
export default ClassCounter;