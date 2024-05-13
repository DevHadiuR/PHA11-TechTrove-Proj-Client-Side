import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import NewsLatter from "../../components/newslatter/NewsLatter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header></Header>

      <section>
        <NewsLatter></NewsLatter>
      </section>
    </div>
  );
};

export default Home;
