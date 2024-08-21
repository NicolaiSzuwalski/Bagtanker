import React from 'react'
import styles from './CategoryNav.module.scss'
import { useSupabase } from '../../providers/SupabaseProvider'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const CategoryNav = () => {
    const { supabase } = useSupabase();

    const [data, setData] = useState([]);

    const getCategoryData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from('categories')
                .select('id, title, active');
            if (error) {
                console.error(error);
            } else {
                setData(data);
                console.log(data)
            }
        }
    };

    useEffect(() => {
        getCategoryData();
    }, [supabase]);
    return (
        <nav className={styles.CategoryNav}>
          {data.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`} // Assuming you're routing to a category page by ID
              className={styles.NavLink}
              activeClassName={styles.ActiveLink}
            >
              {category.title}
            </NavLink>
          ))}
        </nav>
      );
}
