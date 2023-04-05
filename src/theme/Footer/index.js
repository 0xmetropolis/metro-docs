/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react'
 import styles from './styles.module.css'
 import QuestionsIcon from '../../../static/img/questionsIcon.svg'
 import TwitterIcon from '../../../static/img/twitterIcon.svg'
 import MetropolisLogo from '../../../static/img/homepageLogo.svg'
 import ArrowIcon from '../../../static/img/footerArrow.svg'
 
 function Footer() {
   return (
     <div className={styles.footer}>
       <div className={styles.footerContainer}>
       <div className={styles.footerLinksFlexbox}>
       <a
           href="https://twitter.com/0xMetropolis"
           target="_blank"
           rel="noopener noreferrer"
           className={styles.textFlexbox}
         >
           <div className={styles.footerTitleFlexbox}>
           <ArrowIcon className={styles.footerIcon} />
             <h3 className={styles.footerTitle}>Twitter</h3>
           </div>
         </a>    
         <a
           className={styles.textFlexbox}
           href="https://discord.gg/yRdfXxH9kd"
           target="_blank"
           rel="noopener noreferrer"
         >
           <div className={styles.footerTitleFlexbox}>
           <ArrowIcon className={styles.footerIcon} />
             <h3 className={styles.footerTitle}>Support</h3>
           </div>
         </a>
       </div>
       </div>
     </div>
   )
 }
 
 export default Footer