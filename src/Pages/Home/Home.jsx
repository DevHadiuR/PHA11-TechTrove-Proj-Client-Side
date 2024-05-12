import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header></Header>
    </div>
  );
};

export default Home;
