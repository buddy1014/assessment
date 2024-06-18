import { useFetchAPI } from "../../hooks/useFetchAPI";
import Card from "../Card/Card";

const Home = () => {
  const { loading, data: images } = useFetchAPI();

  return (
    <div className="container">
      {loading ? (
        <span className="text text-bg">Loading</span>
      ) : (
        <>
          {images.map((img, index) => (
            <Card key={`img-${index}`} img={img} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
