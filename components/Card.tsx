import styles from '../styles/Card.module.css'

type props = {
    title: string;
    author: string;
}

export const Card = ({title, author} : props) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    )
}