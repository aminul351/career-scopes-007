import Categories from '../Categories/Categories';
import Banner from './Banner';
import Company from './Company';
import Contact from './Contact';
import DiscoverCareerPath from './DiscoverCareerPath';
import JobSeekers from './JobSeekers';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <JobSeekers/>
            <DiscoverCareerPath/>
            <Services/>
            <Contact/>
            <Testimonial/>
            <Company/> 
        </div>
    );
};

export default Home;