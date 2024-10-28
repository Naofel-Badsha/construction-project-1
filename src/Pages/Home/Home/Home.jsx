
import Different from "../Different/Different";
import ExcellentServices from "../ExcellentServices/ExcellentServices";
import Group from "../Group/Group";
import HomeBanner from "../HomeBanner/HomeBanner";
import MeetAndTalk from "../MeetAndTalk/MeetAndTalk";
import NewsAndUpdate from "../NewsAndUpdate/NewsAndUpdate";
import OurStory from "../OurStory/OurStory";
import ProjectCullection from "../ProjectCullection/ProjectCullection";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Group></Group>
            <ExcellentServices></ExcellentServices>
            <Different></Different>
            <MeetAndTalk></MeetAndTalk>
            <OurStory></OurStory>
            <ProjectCullection></ProjectCullection>
            <NewsAndUpdate></NewsAndUpdate>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;