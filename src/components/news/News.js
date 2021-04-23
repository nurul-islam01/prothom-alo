import React from 'react';
import './news.scss';
import { Link } from "react-router-dom";

const News = ({news}) => {

    const { id, title, description, photo, time } = news;

    const dateFormat = (date) => {
        let prev = new Date(date);
        let recent = new Date();
        const hours = Math.abs(recent - prev) / 36e5;
        return Math.round(hours);
    }

    return (
        <Link to={`/news/${id}`} className="item__news">
            <div className="item__news-sub">
                <figure className="item__news-figure">
                    <img src={photo} alt={title} className="item__news-image" />
                </figure>
                <div className="item__news-body">
                    <h1 className="item__news-title">{title}</h1>
                    <div className="item__news-time">{dateFormat(time)} ঘণ্টা আগে</div>
                </div>
            </div>
        </Link>
    )
}

export default News;