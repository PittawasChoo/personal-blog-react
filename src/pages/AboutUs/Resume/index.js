import React from "react";

import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

import ShowInViewBox from "./ShowInView";
import {
    ScBody,
    ScCareer,
    ScContactDetail,
    ScContentContainer,
    ScDescription,
    ScHeader,
    ScJourneyHeader,
    ScJourneyHeaderContainer,
    ScJourneyPeriod,
    ScJourneyPlace,
    ScLeftSectionContainer,
    ScListItem,
    ScName,
    ScProfileImg,
    ScRoot,
    ScTopic,
    ScTopSectionContainer,
    ScTextLink,
} from "./styles";

const Resume = () => {
    return (
        <ScRoot>
            <ScBody>
                <ScHeader>ALL ABOUT ME</ScHeader>
                <ScContentContainer>
                    <ScLeftSectionContainer>
                        <ScTopSectionContainer>
                            <ScProfileImg />
                        </ScTopSectionContainer>
                        <ShowInViewBox>
                            <ScContactDetail>
                                <EmailOutlinedIcon /> pittawas.choochuea@gmail.com
                            </ScContactDetail>
                            <ScContactDetail>
                                <HomeWorkOutlinedIcon />
                                1/50, Khumklao Rd., Soi Khumklao 35, Lumplatiw, Ladkrabang, Bangkok,
                                10520
                            </ScContactDetail>
                            <ScContactDetail>
                                <PhoneIphoneOutlinedIcon />
                                061-389-5414
                            </ScContactDetail>
                            <ScContactDetail>
                                <CakeOutlinedIcon />
                                Nov 10, 1998
                            </ScContactDetail>
                            <ScContactDetail>
                                <LinkOutlinedIcon />
                                <ScTextLink to="https://www.linkedin.com/in/pittawas-choo/">
                                    linkedin.com/in/pittawas-choo
                                </ScTextLink>
                            </ScContactDetail>
                            <ScContactDetail>
                                <LinkOutlinedIcon />
                                <ScTextLink to="https://www.yearofculinaryjourneys.com/">
                                    Year of Culinary Journeys Website
                                </ScTextLink>
                            </ScContactDetail>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScTopic>SKILLS</ScTopic>
                            <ul>
                                <ScListItem>Javascript</ScListItem>
                                <ScListItem>HTML</ScListItem>
                                <ScListItem>CSS</ScListItem>
                                <ScListItem>ReactJs</ScListItem>
                                <ScListItem>NextJs</ScListItem>
                                <ScListItem>NodeJs</ScListItem>
                                <ScListItem>Express</ScListItem>
                                <ScListItem>PostgreSQL</ScListItem>
                                <ScListItem>SAP BTP</ScListItem>
                                <ScListItem>SAP CAP</ScListItem>
                                <ScListItem>SAP Fiori (UI5)</ScListItem>
                            </ul>
                        </ShowInViewBox>
                        <ShowInViewBox>
                            <ScTopic>Certifications</ScTopic>
                            <ul>
                                <ScListItem>
                                    SAP Certified Development Associate — SAP Cloud Application
                                    Programming (CAP) (C_CPE_2409)
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>
                        <ShowInViewBox>
                            <ScTopic>Languages</ScTopic>
                            <ul>
                                <ScListItem>Thai | Native</ScListItem>
                                <ScListItem>English | Intermediate</ScListItem>
                            </ul>
                        </ShowInViewBox>
                    </ScLeftSectionContainer>

                    <div>
                        <ScTopSectionContainer>
                            <ScName>Pittawas</ScName>
                            <ScName>Choochuea</ScName>
                            <ScCareer>SOFTWARE DEVELOPER</ScCareer>
                        </ScTopSectionContainer>
                        <ShowInViewBox>
                            <ScDescription>
                                Passionate developer with over 3 years of experience in developing
                                web applications. Proficient in both front-end technologies
                                especially ReactJs and NextJs, and back-end technologies including
                                Node.js and Express. Seeking to leverage my skills in a dynamic team
                                environment to drive innovation and deliver high-quality software
                                solutions.
                            </ScDescription>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScTopic>MY JOURNEY</ScTopic>
                            <ScJourneyHeaderContainer>
                                <div>
                                    <ScJourneyHeader>SOFTWARE ENGINEER STUDENT</ScJourneyHeader>
                                    <ScJourneyPlace>
                                        Faculty of Information Technology, King Mongkut's Institute
                                        of Technology Ladkrabang | Bangkok
                                    </ScJourneyPlace>
                                </div>
                                <ScJourneyPeriod>2017 - 2021</ScJourneyPeriod>
                            </ScJourneyHeaderContainer>
                            <ul>
                                <ScListItem>
                                    Used NextJs with NodeJs to create website for senior project
                                    subject.
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScJourneyHeaderContainer>
                                <div>
                                    <ScJourneyHeader>APPRENTICE SOFTWARE DEVELOPER</ScJourneyHeader>
                                    <ScJourneyPlace>VenueE | Bangkok</ScJourneyPlace>
                                </div>
                                <ScJourneyPeriod>JUN 2019 - JUL 2019</ScJourneyPeriod>
                            </ScJourneyHeaderContainer>
                            <ul>
                                <ScListItem>
                                    Created interactive user interfaces with React and NextJs
                                    framework.
                                </ScListItem>
                                <ScListItem>
                                    Developed and executed automated test scripts using Cypress.io
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with UX/UI designers to implement design
                                    concepts.
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with back-end developers to ensure seamless
                                    integration of front-end and back-end code.
                                </ScListItem>
                                <ScListItem>
                                    Optimized website performance through code refactoring and
                                    caching techniques.
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScJourneyHeaderContainer>
                                <div>
                                    <ScJourneyHeader>SOFTWARE DEVELOPER</ScJourneyHeader>
                                    <ScJourneyPlace>ElysianNXT | Bangkok</ScJourneyPlace>
                                </div>
                                <ScJourneyPeriod>JUL 2021 - JUN 2024</ScJourneyPeriod>
                            </ScJourneyHeaderContainer>
                            <ul>
                                <ScListItem>
                                    Created interactive user interfaces with React framework.
                                </ScListItem>
                                <ScListItem>
                                    Developed APIs using Node.js and Express framework to make a
                                    microservice for files and images storage.
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with UX/UI designers to implement design
                                    concepts.
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with back-end developers to ensure seamless
                                    integration of front-end and back-end code.
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with software testers to test and validate
                                    web functionality.
                                </ScListItem>
                                <ScListItem>
                                    Optimized website performance through code refactoring and
                                    caching techniques.
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScJourneyHeaderContainer>
                                <div>
                                    <ScJourneyHeader>
                                        FRONTEND DEVELOPER (PART TIME)
                                    </ScJourneyHeader>
                                    <ScJourneyPlace>Year of Culinary Journeys |</ScJourneyPlace>
                                    <ScJourneyPlace>
                                        Tourism Authority of Thailand (TAT):
                                        การท่องเที่ยวแห่งประเทศไทย (ททท)
                                    </ScJourneyPlace>
                                </div>
                                <ScJourneyPeriod>AUG 2025 - OCT 2025</ScJourneyPeriod>
                            </ScJourneyHeaderContainer>
                            <ul>
                                <ScListItem>
                                    Delivered a responsive NextJs + Tailwind static site for mobile
                                    and desktop.
                                </ScListItem>
                                <ScListItem>
                                    Integrated Google Maps Platform to display locations and pins in
                                    website.
                                </ScListItem>
                                <ScListItem>
                                    Optimized website to share quiz result to Facebook, X, and
                                    Instagram.
                                </ScListItem>
                                <ScListItem>
                                    Collaborated closely with UX/UI designers to implement design
                                    concepts. And also collaborated closely with graphic designers
                                    to decorate the website with best art works.
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>

                        <ShowInViewBox>
                            <ScJourneyHeaderContainer>
                                <div>
                                    <ScJourneyHeader>FULL-STACK DEVELOPER</ScJourneyHeader>
                                    <ScJourneyPlace>Avally Thailand | Bangkok</ScJourneyPlace>
                                </div>
                                <ScJourneyPeriod>MAR 2025 - PRESENT</ScJourneyPeriod>
                            </ScJourneyHeaderContainer>
                            <ul>
                                <ScListItem>
                                    Built SAP Fiori apps on SAP BTP (Fiori Elements/UI5).
                                </ScListItem>
                                <ScListItem>
                                    Delivered SAP CAP services (Node.js/CDS, HANA Cloud, OData v4).
                                </ScListItem>
                                <ScListItem>
                                    Developed React frontends and optimized to BTP via App
                                    Router/Destinations.
                                </ScListItem>
                                <ScListItem>
                                    Optimized queries & payloads (annotations, $select/$expand).
                                </ScListItem>
                                <ScListItem>
                                    Shipped on Cloud Foundry (MTA) with basic CI, logging, and
                                    monitoring.
                                </ScListItem>
                            </ul>
                        </ShowInViewBox>
                    </div>
                </ScContentContainer>
            </ScBody>
        </ScRoot>
    );
};

export default Resume;
