import React from 'react'
import { useSupabase } from '../../providers/SupabaseProvider'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import styles from './HomeNews.module.scss'
import { format } from 'date-fns';

export const HomeNews = () => {

    const { supabase } = useSupabase();

    const [data, setData] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd. MMMM. yyyy:');
    };

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const getNewsData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('news')
                .select('id, title, teaser, content, images(id, filename), created_at');
            if (error) {
                console.error(error);
            } else {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selectedNews = shuffled.slice(0, 3);
                
                setData(selectedNews);
            }
        }
    };

    useEffect(() => {
        getNewsData();
    }, [supabase]);

    return (
        <section className={styles.NewsWrapper}>
            <h1>Nyheder</h1>
            <div className={styles.NewsGrid}>
                {data.map((newsItem) => (
                    <NavLink 
                        to={`/news/${newsItem.id}`} 
                        key={newsItem.id} 
                        className={styles.NewsItem}
                    >
                        <div className={styles.ImageWrapper}>
                           <img src={newsItem.images.filename} alt="NewsImg" />
                        </div>

                        <div className={styles.TextWrapper}>
                        <b>{formatDate(newsItem.created_at)}</b>
                        <h2>{newsItem.title}</h2>
                        <p>{truncateText(newsItem.teaser, 35, '...')}</p>
                        </div>
                        
                    </NavLink>
                ))}
            </div>
        </section>
    );
};


