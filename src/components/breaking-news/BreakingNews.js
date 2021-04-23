import React from 'react';
import './breaking-news.scss';
import { Link } from "react-router-dom";

const BreakingNews = ({news}) => {

    const { id, title, description, photo, time } = news;

    const dateFormat = (date) => {
        let prev = new Date(date);
        let recent = new Date();
        const hours = Math.abs(recent - prev) / 36e5;
        return Math.round(hours);
    }

    return (
        <Link to={`/news/${id}`} className="item__breaking">
          <div className="item__breaking-body">
            <h1 className="item__breaking-title">{title}</h1>
            <div className="item__breaking-desc">
              {description}
            </div>
            <div className="item__breaking-time">{dateFormat(time)} ঘণ্টা আগে</div>
          </div>
          <div className="item__breaking-image-section">
            <figure className="item__breaking-figure">
              <img src={photo} alt={title} className="item__breaking-image"/>
            </figure>
            <figcaption className="item__breaking_caption">

            </figcaption>
          </div>
        </Link>
    )
}

export default BreakingNews;