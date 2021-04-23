import React from 'react';
import './right-sidebar.scss';

const RightSidebar = ({newses}) => {

    const dateFormat = (date) => {
        let prev = new Date(date);
        let recent = new Date();
        const hours = Math.abs(recent - prev) / 36e5;
        return Math.round(hours);
    }

    return ( 
        <div className="right-sidebar">
          <div className="right-sidebar__post">
            <figure className="right-sidebar__post-figure">
              <img src={newses[1].photo} alt="" className="right-sidebar__post-image" />
            </figure>
            <figcaption className="right-sidebar__post-title">
              {newses[1].title}
            </figcaption>
          </div>
          <div className="right-sidebar__post">
            <div className="item__news-sub">
              <figure className="item__news-figure">
                <img src={newses[0].photo} alt={newses[0].title} className="item__news-image" />
              </figure>
              <div className="item__news-body">
                <div className="item__post-title">{newses[0].title}</div>
                <div className="item__news-time">{dateFormat(newses[0].time)} ঘণ্টা আগে</div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default RightSidebar;