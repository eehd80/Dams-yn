import React, { Component } from "react";
import { withResizeDetector } from "react-resize-detector";

const containerStyles = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

class AdaptiveComponent extends Component {
    state = {
        color: "red",
    };

    componentDidUpdate(prevProps) {
        const { width } = this.props;

        if (width !== prevProps.width) {
            this.setState({
                color: width > 500 ? "coral" : "aqua",
            });
        }
    }

    render() {
        const { width, height } = this.props;
        const { color } = this.state;
        return <div style={{ backgroundColor: color, ...containerStyles }}>{`${width}x${height}`}</div>;
    }
}

const AdaptiveWithDetector = withResizeDetector(AdaptiveComponent);

const App = () => {
    return (
        <div>
            <p>The rectangle changes color based on its width</p>
            <AdaptiveWithDetector />
        </div>
    );
};

export default App;
