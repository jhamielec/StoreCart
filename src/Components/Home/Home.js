import './Home.css';
const image=require('./Store.jpg')

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Greatest Store in the World</h1>
      <img src={image} alt="store"></img>
      <div className="homeText">
      We are proud to offer you at least 2 kinds of fruit and milk. We guarantee that there are prices, and that your shopping cart will be filled with something. Do not be afraid to shop here. We are a peaceful store, and we guarantee your safety.
      </div>
    </div>
  );
}

export default Home;
