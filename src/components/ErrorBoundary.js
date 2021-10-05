import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { anyError: false };
    }

    componentDidCatch(error){
        this.setState({ anyError: true });
    }

    render() {
        if (this.state.anyError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;