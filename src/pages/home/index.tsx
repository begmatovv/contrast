import HomeContrastAgents from './components/contrast';
import HomeFaq from './components/faq';
import HomeHero from './components/hero';
import HomeInfo from './components/info';
import HomeMore from './components/more';
import HomeProof from './components/proof';
import HomeReviews from './components/reviews';
import HomeSecurity from './components/security';
import HomeSuperiority from './components/superiority';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeContrastAgents />
      <HomeInfo />
      <HomeSecurity />
      <HomeReviews />
      <HomeProof />
      <HomeSuperiority />
      <HomeFaq />
      <HomeMore/>
    </div>
  );
}

export default Home;
