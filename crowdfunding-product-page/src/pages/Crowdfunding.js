import React, { useState } from 'react';

import CrowdFundingAbout from "../components/Crowdfunding/CrowdFundingAbout";
import CrowdFundingHeader from "../components/Crowdfunding/CrowdFundingHeader";
import CrowdFundingStats from "../components/Crowdfunding/CrowdFundingStats";
import Container from "../components/Grid/Container";
import Header from "../components/Header";
import PageCover from "../components/UI/PageCover";
import ProjectModal from "../components/Modal/ProjectModal";
import Footer from "../components/Footer";
import SuccessModal from '../components/Modal/SuccessModal';

const Crowdfunding = () => {
  const [modalDisplay, setModalDisplay] = useState({});
  const [pledgeSuccess, setPledgeSuccess] = useState(false);

  const crowdfundProjects = [
    {
      id: 'cp1001',
      title: 'Pledge with no reward',
      pledgeAmount: 0,
      description: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      quantity: 0
    },
    {
      id: 'cp1002',
      title: 'Bamboo Stand',
      pledgeAmount: 25,
      description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
      quantity: 101
    },
    {
      id: 'cp1003',
      title: 'Black Edition Stand',
      pledgeAmount: 75,
      description: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      quantity: 64
    },
    {
      id: 'cp1004',
      title: 'Mahogany Special Edition',
      pledgeAmount: 200,
      description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      quantity: 0
    }
  ];

  const crowdfundStats = {
    fundRaised: 89914,
    fundGoal: 100000,
    fundBackers: 5007,
    fundDaysLeft: 56
  };

  const handleOpenProjectModal = (isOpen, cpId) => {
    setModalDisplay({
      isOpen: isOpen,
      cpId: cpId
    });
  };

  const handleOnPledgeSuccess = (onSuccess) => {
    setPledgeSuccess(onSuccess)
  };

  const handleSuccessModalClose = (isClosed) => {
    setPledgeSuccess(!isClosed);
  };

  return (
    <div id="crowdfunding-page">
      <Header />
      <PageCover coverImage="url(images/image-hero-desktop.jpg)" />
      <main>
        <section id="crowdfunding-section">
          <Container>
            <CrowdFundingHeader onOpenProjectModal={handleOpenProjectModal} />
            <CrowdFundingStats crowdfundStats={crowdfundStats} />
            <CrowdFundingAbout 
              crowdfundProjects={crowdfundProjects} 
              onOpenProjectModal={handleOpenProjectModal} 
            />
            <ProjectModal 
              crowdfundProjects={crowdfundProjects} 
              modalDisplay={modalDisplay} 
              onOpenProjectModal={handleOpenProjectModal} 
              onPledgeSuccess={handleOnPledgeSuccess}
            />
            {pledgeSuccess && <SuccessModal successModalClose={handleSuccessModalClose} />}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Crowdfunding;