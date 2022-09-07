import Footer from '../../common-components/footer/Footer';
import { Header } from '../../common-components/header';
import Hero from './Hero';
import Join from './Join';
import Plans from './Plans';
import Programs from './Programs';
import Reasons from './Reasons';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />
        </div>
    );
};

export default Home;
