import React from 'react'
import { useState, useEffect } from 'react';

import {
  Timeline,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem, TimelineContent, TimelineOppositeContent
} from '@mui/lab';
import Typography from '@mui/material/Typography';
import '../bcExecution/bcExecution.css'
import Bcd11 from '../../../images/blockchaindevelopment/bcd11.png'
import Bcd12 from '../../../images/blockchaindevelopment/bcd12.png'
import Bcd25 from '../../../images/blockchaindevelopment/bcd25.png'
import Bcd26 from '../../../images/blockchaindevelopment/bcd26.png'
import Bcd27 from '../../../images/blockchaindevelopment/bcd27.png'

const BcExecution = () => {

 
  return (
    <>
      <div className='bcExecution'>
        <p id='executionTitle1'>We have our unique way</p>
        <p id='executionTitle2'>Our Execution Process</p>



        {
         typeof window !== 'undefined' ? window.innerWidth >=767 ? <Timeline id='position' position='alternate'>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary">
              </TimelineOppositeContent>
              <TimelineSeparator>
                <img src={Bcd25} alt='timelineImage'></img>
                <TimelineConnector></TimelineConnector>
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle' variant="h6" component="span">
                  Discovery Workshop
                </Typography>
                <Typography id='timelineText1'>Here, we understand your business, goals, pain points and priorities. These multiple brainstorming sessions help us to map out the existing workflows and your future goals</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary">
              </TimelineOppositeContent>
              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <img src={Bcd27} alt='timelineImage'></img>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle' variant="h6" component="span">
                  Strategy and Solution Design
                </Typography>
                <Typography id='timelineText2'>At this stage, once we gather your requirements in a whiteboard session, we begin designing, prototyping, and user testing your platform or product.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <img src={Bcd25} alt='timelineImage'></img>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle1' variant="h6" component="span">
                  Development
                </Typography>
                <Typography id='timelineText1'>Programming and coding based on the designs approved by you takes place in this stage. Our development lifecycle consists of 3-stages: Alpha phase, Beta phase and Release phase.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                {/* <TimelineConnector/> */}
                <img src={Bcd26} alt='timelineImage'></img>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle' variant="h6" component="span">
                  Testing and QA
                </Typography>
                <Typography id='timelineText2'>We continue our data-derived validation process, carry out in-depth QA testing, for each release of your product or platform to ensure that the final product, that is ready for the market.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <img src={Bcd12} alt='timelineImage'></img>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle' variant="h6" component="span">
                  Launch and Maintenance
                </Typography>
                <Typography id='timelineText1'>Here, your product or platform goes LIVE. On your approval, our devs publish your product in live environments. We exclusively take care of cloud and on-premise hosting.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <img src={Bcd11} alt='timelineImage'></img>
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography id='firstTitle' variant="h6" component="span">
                  Support and Customer Service
                </Typography>
                <Typography id='timelineText2'>To ensure continuous improvement, we perform ongoing product and platform maintenance and optimization, deploy market strategies, and provide real/fix support.</Typography>
              </TimelineContent>
            </TimelineItem>

          </Timeline> :
            <Timeline id='position' position='right' >
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <img src={Bcd25} alt='timelineImage'></img>
                  <TimelineConnector></TimelineConnector>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle' variant="h6" component="span">
                    Discovery Workshop
                  </Typography>
                  <Typography id='timelineText1'>Here, we understand your business, goals, pain points and priorities. These multiple brainstorming sessions help us to map out the existing workflows and your future goals</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {/* <TimelineConnector /> */}
                  <img src={Bcd27} alt='timelineImage'></img>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle' variant="h6" component="span">
                    Strategy and Solution Design
                  </Typography>
                  <Typography id='timelineText2'>At this stage, once we gather your requirements in a whiteboard session, we begin designing, prototyping, and user testing your platform or product.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  {/* <TimelineConnector /> */}
                  <img src={Bcd25} alt='timelineImage'></img>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle1' variant="h6" component="span">
                    Development
                  </Typography>
                  <Typography id='timelineText1'>Programming and coding based on the designs approved by you takes place in this stage. Our development lifecycle consists of 3-stages: Alpha phase, Beta phase and Release phase.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  {/* <TimelineConnector/> */}
                  <img src={Bcd26} alt='timelineImage'></img>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle' variant="h6" component="span">
                    Testing and QA
                  </Typography>
                  <Typography id='timelineText2'>We continue our data-derived validation process, carry out in-depth QA testing, for each release of your product or platform to ensure that the final product, that is ready for the market.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  {/* <TimelineConnector /> */}
                  <img src={Bcd12} alt='timelineImage'></img>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle' variant="h6" component="span">
                    Launch and Maintenance
                  </Typography>
                  <Typography id='timelineText1'>Here, your product or platform goes LIVE. On your approval, our devs publish your product in live environments. We exclusively take care of cloud and on-premise hosting.</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <img src={Bcd11} alt='timelineImage'></img>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography id='firstTitle' variant="h6" component="span">
                    Support and Customer Service
                  </Typography>
                  <Typography id='timelineText2'>To ensure continuous improvement, we perform ongoing product and platform maintenance and optimization, deploy market strategies, and provide real/fix support.</Typography>
                </TimelineContent>
              </TimelineItem>

            </Timeline>:''
        }






      </div>
    </>
  )
}

export default BcExecution