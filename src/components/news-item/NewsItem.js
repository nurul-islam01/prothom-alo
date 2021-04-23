import React, { useState, useEffect } from 'react';
import {
    useParams
  } from "react-router-dom";
import _ from 'lodash';

import data from '../../data.json';



const NewsItem = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const all = JSON.parse(JSON.stringify(data));
        let n = _.find(all, { id });
        setNews(n);
    }, []);

    if(!news) {
        return <div>Loading...</div>;
    }

    return(
        <div className="item__container">
            <h1 className="item__container-title">{news.title}</h1>
            <img src={news.photo} className="item__container-image" alt={news.title} />
            <div className="item__container-desc">{news.description}</div>
        </div>
    );
}

export default NewsItem;