export const getStaticPaths = async () => {
  //this tells it all the potential paths we will have e.g. /1
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const data = await response.json();

  const paths = data.map((beer) => {
    return {
      params: {
        id: beer.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //This is where we get the data for individual beers and return it
  //This runs each time we have an id from the above params
  const id = context.params.id;
  const response = await fetch(`https://api.punkapi.com/v2/beers?ids=${id}`);
  const data = await response.json();

  return {
    props: {
      beer: data[0],
    },
  };
};

const Details = ({ beer }) => {
  console.log(beer);
  return (
    <div>
      <h2>Details for {beer.name} Beer</h2>
      <ul>
        <li>{beer.tagline}</li>
        <li>{beer.abv}%</li>
        <li>{beer.brewers_tips}</li>
      </ul>
    </div>
  );
};
export default Details;

//Host for free in vercel!
