import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
    ScBackground,
    ScBarCode,
    ScCautionArea,
    ScCautionLine,
    ScCautionLogo,
    ScCautionText,
    ScGridBox,
    ScGridImage,
    ScGridItem,
    ScGridItemForCaution,
    ScGridItemForLogo,
    ScGridItemForOtherMenu,
    ScGridItemForSecondGridImage,
    ScGridItemForSecondLogo,
    ScGridItemForSlogan,
    ScGridItemForSponsors,
    ScKeepOutImage,
    ScLongWarning,
    ScOverlay,
    ScRoot,
    ScSecondLogo,
    ScSecondLogoLine,
    ScSecondLogoText,
    ScShopNameBrown,
    ScShopNameContainer,
    ScShopNameFirstRow,
    ScShopNameSecondRow,
    ScShortWarning,
    ScSloganImage,
    ScSloganText,
    ScSponsorsLabel,
    ScSponsorsLabelContainer,
    ScSponsorsLabelIcon,
    ScSponsorLogo,
    ScSponsorLogo2,
    ScTradeMarkSymbol,
} from "./styles";

const Main = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <ScRoot ref={ref}>
            <ScGridBox>
                <ScGridItemForLogo />
                <ScGridItem />
                <ScGridItemForOtherMenu />
                <ScGridItem>
                    <ScGridImage imgPath="/images/banner/grid-img.png" />
                </ScGridItem>
                <ScGridItem />
                <ScGridItem />
                <ScGridItemForSecondGridImage>
                    <ScGridImage imgPath="/images/banner/grid-img2.png" />
                </ScGridItemForSecondGridImage>
                <ScGridItemForCaution>
                    <ScCautionLogo />
                    <ScCautionLine />
                    <ScCautionArea>AREA // 02-A</ScCautionArea>
                    <ScCautionText>
                        <b>CAUTION</b>
                    </ScCautionText>
                    <ScKeepOutImage />
                    <ScShortWarning>
                        <b>USE WITH CAUTION AND AT YOUR OWN RISK</b>
                    </ScShortWarning>
                    <ScLongWarning>
                        <b>WARNING:</b> Overheating may cause damage to this object. Please ensure
                        that the object is used in accordance with the manufacturer's instructions
                        and avoid exposing it to extreme heat or prolonged exposure to direct
                        sunlight.
                    </ScLongWarning>
                </ScGridItemForCaution>
                <ScShopNameContainer>
                    <div>
                        <ScShopNameFirstRow>
                            CYBERPUNK
                            <ScTradeMarkSymbol>R</ScTradeMarkSymbol>
                        </ScShopNameFirstRow>
                        <ScShopNameSecondRow>
                            TECH <ScShopNameBrown>WEAR</ScShopNameBrown>
                        </ScShopNameSecondRow>
                    </div>
                </ScShopNameContainer>
                <ScGridItem />
                <ScGridItemForSecondLogo>
                    <div>
                        <ScSecondLogo />
                        <ScSecondLogoLine />
                        <ScSecondLogoText>WEAR THE FUTURE</ScSecondLogoText>
                    </div>
                </ScGridItemForSecondLogo>
                <ScGridItemForSlogan>
                    <div>
                        <ScSloganText>FUTURE IS HERE</ScSloganText>
                        <ScSloganImage />
                    </div>
                </ScGridItemForSlogan>
                <ScGridItemForSponsors>
                    <ScSponsorsLabelContainer>
                        <ScSponsorsLabelIcon imgPath="/images/banner/left_symbol.png" />
                        <ScSponsorsLabel>
                            THE LATEST TREND OF TECH WEAR AND
                            <br />
                            FUTURE TECHNOLOGY WORLD
                        </ScSponsorsLabel>
                        <ScSponsorsLabelIcon imgPath="/images/banner/right_symbol.png" />
                    </ScSponsorsLabelContainer>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <ScSponsorLogo imgPath="/images/banner/sponsor_logo1.png" />
                        <ScSponsorLogo imgPath="/images/banner/sponsor_logo3.png" />
                        <ScSponsorLogo2 />
                        <ScBarCode />
                    </div>
                </ScGridItemForSponsors>
            </ScGridBox>

            <ScOverlay />
            <motion.div
                style={{
                    height: "100%",
                    y: backgroundY,
                }}
            >
                <ScBackground />
            </motion.div>
        </ScRoot>
    );
};

export default Main;
