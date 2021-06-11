import { withResizeDetector } from "react-resize-detector";

const CustomComponent = ({ width, height }) => <div>{`${width}x${height}`}</div>;

export default withResizeDetector(CustomComponent);
