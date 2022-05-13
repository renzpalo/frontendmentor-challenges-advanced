import CrowdFundingAbout from "../components/Crowdfunding/CrowdFundingAbout";
import CrowdFundingHeader from "../components/Crowdfunding/CrowdFundingHeader";
import CrowdFundingStats from "../components/Crowdfunding/CrowdFundingStats";
import Container from "../components/Grid/Container";
import Header from "../components/Header";
import PageCover from "../components/UI/PageCover";
import ProjectModal from "../components/Modal/ProjectModal";

const Crowdfunding = () => {
  const crowdfundStats = {
    fundRaised: 89914,
    fundGoal: 100000,
    fundBackers: 5007,
    fundDaysLeft: 56
  };

  return (
    <div id="crowdfunding-page">
      <Header />
      <PageCover coverImage="url(images/image-hero-desktop.jpg)" />
      <main>
        <section id="crowdfunding-section">
          <Container>
            <CrowdFundingHeader />
            <CrowdFundingStats crowdfundStats={crowdfundStats} />
            <CrowdFundingAbout />
            <ProjectModal />
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Crowdfunding;