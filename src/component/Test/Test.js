import React from 'react';
import queryString from 'query-string';

const Test = ({location}) => {
    let room = queryString.parse(location.search);

    return <div className="Test">

    </div>
}

export default Test;