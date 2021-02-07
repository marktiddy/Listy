import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h2 className={styles.title}>Hello world</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        voluptatum impedit explicabo qui minima quidem rerum? Esse quod ex hic
        doloremque odio ducimus est corporis quam praesentium possimus eos
        facere, nesciunt iste velit sequi deserunt labore officia, dolorum neque
        autem accusamus vero. Animi quaerat omnis ullam nostrum veritatis,
        repudiandae corporis.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See All Beers</a>
      </Link>
    </div>
  );
}
