import React from "react";
import DefaultLayout from '../../sharedModules/default'
import Banner from '../../Components/banner'
import WhatDoge from '../../Components/whatDoge'
import Collection from '../../Components/collection'
import Partners from '../../Components/partners'
import WhiteList from '../../Components/whiteList'
import Team from '../../Components/team'
import { motion } from "framer-motion";
import BlocksWithLinesCont from "./BlocksWithLinesCont";


const Index = () => {
  return (
    <DefaultLayout>
      <Banner/>
      <WhatDoge/>
      <div className="bg-wolf">
        <Collection/>
        <WhiteList/>
        <Partners/>
      </div>
      <div className="twr-bg">
        <Team/>
      </div>
      <motion.div
        className="bg-wolf-lens"
      >
        <BlocksWithLinesCont />
      </motion.div>
    </DefaultLayout>
  )
}

export default Index;