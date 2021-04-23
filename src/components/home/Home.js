import logo from '../../logo.png';
import data from '../../data.json';
import React, { useEffect, useState } from 'react';
import BreakingNews from '../breaking-news/BreakingNews';
import SubNews from '../subnews/SubNews';
import News from '../news/News';
import RightSidebar from '../right-sidebar/RightSidebar';
import './home.scss';

const Home = () => {

    
  const [breakingNews, setbreakingNews] = useState([]);
  const [subNews, setsubNews] = useState([]);
  const [news, setNews] = useState([]);
  const [sidebarPost, setsidebarPost] = useState([]);

  useEffect(() => {
    const all = JSON.parse(JSON.stringify(data));
    let bn = all.filter(item => item.sort == 3 );
    setbreakingNews(bn);
    let sn = all.filter(item => item.sort == 1 || item.sort == 2 || item.sort == 4 || item.sort == 6 );
    setsubNews(sn)
    let n = all.filter(item => item.sort == 5 || item.sort == 7 || item.sort == 8 || item.sort == 9 || item.sort == 10 || item.sort == 11 );
    setNews(n);
    let sbn = all.filter(item => item.sort == 12 || item.sort == 13);
    setsidebarPost(sbn);
  }, []);


  if(sidebarPost.length == 0) {
    return <div>Loading...</div>;
  }

    return (
        <div className="container">
            {breakingNews.map(item => (<BreakingNews key={item.id} news={item} />))}
            {subNews.map(item => (<SubNews news={item} />))}
            {news.map(item => (<News key={item.id} news={item} />))}

            <RightSidebar newses={sidebarPost} />

            <div className="bottom-bar">
                <h1 style={{ textAlign: 'center'}}>Bottom Banner</h1>
            </div>
        </div>
    );
}

export default Home;