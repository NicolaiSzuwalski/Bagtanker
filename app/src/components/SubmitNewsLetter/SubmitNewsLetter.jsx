import { useEffect, useState } from "react";
import { useSupabase } from "../../providers/SupabaseProvider";
import { useForm } from "react-hook-form";
import styles from './SubmitNewsLetter.module.scss'

export const SubmitNewsLetter = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { supabase } = useSupabase();

  const createEmail = async (formdata) => {
    console.log(formdata);
    if (supabase) {
      const { data, error } = await supabase
      .from("newsletter_emails")
      .insert([
        {
          email: formdata.email,
        }
      ]);
      if (error) {
        console.error(error);
      } else {
        setSubmitted(true);
      }
    }
  };


  return (
    <div className={styles.newsLetter}>
      <h1>Tilmeld dig Bagtankers nyhedsbrev</h1>
      {submitted ? (
        <p> Tak for din tilmelding  </p>

       
      ) : (
        <form noValidate onSubmit={handleSubmit(createEmail)}>
        <input
          id='email' type="email" 
          placeholder="Indtast din email"
          {...register("email", {
              required: 'Du skal udfylde feltet',
              pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i,
                message: 'Du skal indtaste en gyldig email addresse'
              }
          })}
        />

        {errors.email && <span style={{color : 'red'}}>{errors.email.message}</span>}

        <button type="submit" >Tilmeld</button>
      </form>
      )}
      
    </div>
  );
};
