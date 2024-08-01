
import Different from "../Different/Different";
import ExcellentServices from "../ExcellentServices/ExcellentServices";
import Group from "../Group/Group";
import HomeBanner from "../HomeBanner/HomeBanner";
import MeetAndTalk from "../MeetAndTalk/MeetAndTalk";
import NewsAndUpdate from "../NewsAndUpdate/NewsAndUpdate";
import OurStory from "../OurStory/OurStory";
import ProjectCullection from "../ProjectCullection/ProjectCullection";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Group></Group>
            <ExcellentServices></ExcellentServices>
            <Different></Different>
            <MeetAndTalk></MeetAndTalk>
            <OurStory></OurStory>
            <NewsAndUpdate></NewsAndUpdate>
            <ProjectCullection></ProjectCullection>
        </div>
    );
};

export default Home;