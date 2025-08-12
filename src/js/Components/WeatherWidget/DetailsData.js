import React from "react";

const DetailsData = (props) => {
    const {temp, title} = props;
    return (
        <div className="widget__details--data--item">
            <span className="widget__details--data--temp">{temp} C</span>
            <span className="widget__details--data--title">{title}</span>
        </div>
    )
}

export default DetailsData;