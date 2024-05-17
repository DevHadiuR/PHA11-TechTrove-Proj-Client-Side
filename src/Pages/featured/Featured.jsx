import { Helmet } from "react-helmet-async";
import FeaturedBanner from "../../components/featuredBanner/FeaturedBanner";
import FeaturedTable from "../../components/featuredTable/FeaturedTable";

const Featured = () => {
  return (
    <section>
      <Helmet>
        <title>Featured Blogs Page | TechTrove</title>
      </Helmet>
      <div className="relative z-0">
        <FeaturedBanner></FeaturedBanner>
      </div>
      <div >
        <FeaturedTable></FeaturedTable>
      </div>
    </section>
  );
};

export default Featured;
