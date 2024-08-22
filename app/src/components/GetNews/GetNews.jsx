import React from 'react'
import styles from './GetNews.module.scss'
import { useSupabase } from '../../providers/SupabaseProvider'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const GetNews = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState([]);

    const getNews = async () => {
        if(supabase){
            const {data, error} = await supabase
            .from('news')
            .select('id, title, teaser, content, images(id, filename), created_at')
            if(error){
                console.error(error)
            }else{
                setData(data)
                console.log(data)
            }
        }
    }

    useEffect(()=>{
        getNews();
    },[supabase]);

  return (
    <div>GetNews</div>
  )
}
