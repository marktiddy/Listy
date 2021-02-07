import styles from '../../styles/Beers.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  //Runs at build time on server
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const data = await res.json();
  return {
    props: { beers: data },
  };
};

const Ninjas = ({ beers }) => {
  return (
    <div>
      <h1>Beers!</h1>
      <div className={styles.container}>
        {beers.map((beer) => {
          return (
            <Link key={beer.id} href={`/beers/${beer.id}`}>
              <div className={styles.card}>
                <h3>{beer.name}</h3>
                <p>{beer.description}</p>
                <img src={beer.image_url} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Ninjas;
