import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import NewsLatter from "../../components/newslatter/NewsLatter";
import RecentBlogs from "../../components/recentBlogs/RecentBlogs";
import OurTeam from "../../components/ourTeam/OurTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | TechTrove</title>
      </Helmet>
      <Header></Header>
      <section>
        <RecentBlogs></RecentBlogs>
      </section>
      <section>
        <OurTeam></OurTeam>
      </section>
      <section>
        <NewsLatter></NewsLatter>
      </section>
    </div>
  );
};

export default Home;
