import CrowdFundingAbout from "../components/Crowdfunding/CrowdFundingAbout";
import CrowdFundingHeader from "../components/Crowdfunding/CrowdFundingHeader";
import CrowdFundingStats from "../components/Crowdfunding/CrowdFundingStats";
import Container from "../components/Grid/Container";
import Header from "../components/Header";
import PageCover from "../components/UI/PageCover";
import Panel from "../components/UI/Panel";

const Crowdfunding = () => {
  return (
    <div id="crowdfunding-page">
      <Header />
      <PageCover coverImage="url(images/image-hero-desktop.jpg)" />
      <main>
        <section id="crowdfunding-section">
          <Container>
            <CrowdFundingHeader />
            <CrowdFundingStats />
            <CrowdFundingAbout />
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Crowdfunding;