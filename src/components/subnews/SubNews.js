import React from 'react';
import './sub-news.scss';
import { Link } from "react-router-dom";

const SubNews = ({news}) => {

    const { id, title, description, photo, time } = news;

    const dateFormat = (date) => {
        let prev = new Date(date);
        let recent = new Date();
        const hours = Math.abs(recent - prev) / 36e5;
        return Math.round(hours);
    }

    return (
        <Link to={`/news/${id}`} className="item__news">
            <h1 className="item__news-title">{title}</h1>
            <div className="item__news-desc">
            {description}
            </div>
            <div className="item__news-time">{dateFormat(time)} ঘণ্টা আগে</div>
        </Link>
    )
}

export default SubNews;