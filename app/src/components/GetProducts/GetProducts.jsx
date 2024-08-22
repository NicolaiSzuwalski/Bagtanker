import React from 'react'
import styles from './GetProducts.module.scss'
import { useSupabase } from '../../providers/SupabaseProvider'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const GetProducts = () => {
    const { supabase } = useSupabase();

    const [data, setData] = useState([]);

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const getProductData = async () => {
        if(supabase){
            const { data, error} = await supabase
            .from('products')
            .select('id, images(id, filename), title, teaser, description, duration, amount, price')
            if(error){
                console.error(error)
            }else{
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selectedProducts = shuffled.slice(0, 4);
                setData(selectedProducts);
            }
        }
    };

    useEffect(() => {
        getProductData();
    }, [supabase]);

  return (

    <div className={styles.ProductsGrid}>

            {data.map((product) => (

                <div key={product.id} className={styles.ProductItem}>

                    <div className={styles.ImageWrapper}>

                        <img 
                            src={product.images?.filename} 
                            alt={product.title} 
                            className={styles.ProductImage} 
                        />

                    </div>

                    <div className={styles.ProductDetails}>

                        <h2>{product.title}</h2>
                        <p>{truncateText(product.teaser, 40, '...')}</p>

                        <NavLink to={`/products/${product.id}`} className={styles.ReadMoreButton}>
                            Læs mere
                        </NavLink>

                    </div>

                </div>
            ))}
        </div>
  )
}
