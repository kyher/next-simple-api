import Link from 'next/link';
import styles from '../styles/Card.module.css'

type props = {
    id: number;
    title: string;
    author: string;
}

export const Card = ({id, title, author} : props) => {
    return (
        <Link href={`/book/${id}`}>
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
        </Link>
        
    )
}