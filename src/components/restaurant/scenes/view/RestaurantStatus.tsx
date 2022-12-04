import "./RestaurantStatus.css";

export const RestaurantStatus = (props: {
    isOpened: boolean;
}) => {
    return (
      <div className="status-component">
        <div className="status-label">Status now:</div>
        <div
          className={`status-constainer ${
            props.isOpened ? "opened" : "closed"
          }`}
        >
          <div className="text-status">
            {props.isOpened ? "Opened" : "Closed"}
          </div>
          <div className="dot-status"></div>
        </div>
      </div>
    );
}