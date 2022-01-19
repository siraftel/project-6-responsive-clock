import { useState, useEffect } from 'react/cjs/react.development';
import style from './quote.module.css';
import axios from "axios";

export default function Quote() {
    const [author, setAuthor] = useState("");
    const [quotes, setQuotes] = useState("");
    
    useEffect(() => {
        const getQuotes = () => {
          axios({
            method: "get",
            url: "https://api.quotable.io/random",
          }).then((result) => {
            setAuthor(result.data.author);
            setQuotes(result.data.content);
          });
        };
        getQuotes();

        const myQuotes = setInterval(() => {
          getQuotes();
        }, 60000 * 10);
    
        return () => {
          clearInterval(myQuotes);
        };
      }, []);

    return (
        <div className={style.quote_container}>
            <div className={style.quote}>
                {quotes}
                <span className={style.author}>{author}</span>
            </div>
        </div>
    )
}