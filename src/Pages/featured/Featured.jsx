import { Helmet } from "react-helmet-async";
import FeaturedBanner from "../../components/featuredBanner/FeaturedBanner";

const Featured = () => {
  return (
    <section>
      <Helmet>
        <title>Featured Blogs Page | TechTrove</title>
      </Helmet>
      <div className="relative z-0">
        <FeaturedBanner></FeaturedBanner>
      </div>
    </section>
  );
};

export default Featured;
