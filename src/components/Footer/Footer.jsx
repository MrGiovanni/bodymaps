import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling

const Footer = () => {
    const groups = [
        {
            title: "Board of Directors",
            members: ["Alan L. Yuille, PhD", "Wenxuan Li", "Zongwei Zhou, PhD", "Xiaoxi Chen, MD"]
        },
        {
            title: "Core Contributors",
            members: ["Chongyu Qu", "Pedro R. A. S. Bassi", "Tiezheng Zhang", "Yucheng Tang, PhD"]
        },
        {
            title: "Technology Supports",
            members: ["Yu-Cheng Chou", "Qi Chen", "Yixiong Chen", "Yuxiang Lai", "Yaoyao Liu, PhD", "Mingxu Liu", "Xinrui Zou"]
        },
        {
            title: "Medical Trainees",
            members: ["Huimin Xue", "Haoqi Han", "Xiaorui Lin", "Yutong Tang", "Yining Cao", "Yujiu Ma", "Hualin Qiao"]
        },
        {
            title: "Special Thanks to Public Datasets",
            members: [
                "Pancreas-CT (2015) <a href='https://academictorrents.com/details/80ecfefcabede760cdbdf63e38986501f7becd49' target='_blank'>[website]</a>", 
                
                "LiTS (2019)  <a href='https://competitions.codalab.org/competitions/17094' target='_blank'>[website]</a>", 
                
                "KiTS (2023)  <a href='https://kits-challenge.org/kits23/' target='_blank'>[website]</a>", 
                
                "AbdomenCT-1K (2023)  <a href='https://github.com/JunMa11/AbdomenCT-1K' target='_blank'>[website]</a>", 
                
                "CT-ORG (2020)  <a href='https://wiki.cancerimagingarchive.net/pages/viewpage.action?pageId=61080890#61080890cd4d3499fa294f489bf1ea261184fd24' target='_blank'>[website]</a>", 
                
                "CHAOS (2018)  <a href='https://chaos.grand-challenge.org/Download/' target='_blank'>[website]</a>", 
                
                "MSD-CT (2021)  <a href='https://decathlon-10.grand-challenge.org/' target='_blank'>[website]</a>", 
                
                "BTCV (2015)  <a href='https://www.synapse.org/#!Synapse:syn3193805/wiki/89480' target='_blank'>[website]</a>", 
                
                "AMOS (2022)  <a href='https://amos22.grand-challenge.org/' target='_blank'>[website]</a>", 
                
                "WORD (2021)  <a href='https://github.com/HiLab-git/WORD' target='_blank'>[website]</a>", 
                
                "FLARE (2022)  <a href='https://codalab.lisn.upsaclay.fr/competitions/12239' target='_blank'>[website]</a>", 
                
                "Abdominal Trauma Det (2023)  <a href='https://www.rsna.org/education/ai-resources-and-training/ai-image-challenge/abdominal-trauma-detection-ai-challengez' target='_blank'>[website]</a>"]
        },
        {
            title: "Collaborators",
            members: ["Yucheng Tang, PhD (NVIDIA)", "Yang Yang, PhD (University of California, San Francisco)", "Kang Wang, MD, PhD (University of California, San Francisco)", "Mehmet Can Yavuz, PhD (University of California, San Francisco)", "Jianning Li, PhD (University Hospital Essen)", "Alberto Santamaria-Pang, PhD (Microsoft)", "Ho Hin Lee, PhD (Microsoft)", "Alejandro Martin-Gomez, PhD (Johns Hopkins University)"]
        },
        {
            title: "Challenges: Towards 3D Atlas of Human Body",
            members: ["IEEE International Symposium on Biomedical Imaging (<a href='https://codalab.lisn.upsaclay.fr/competitions/16919' target='_blank'>ISBI'24</a>)", "International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI'24)"]
        },
        {
            title: "Become Part of the Body Maps Project?",
            members: ["Contact: Zongwei Zhou <a href='mailto:zzhou82@jh.edu' target='_blank'>zzhou82@jh.edu</a>"]
        }
    ];

    return (
        <div className="footer-container">
            <div className="footer-names">
                <div className="footer-text">
                    {groups.map((group, index) => (
                        <div key={index} className="group">
                            <p>{group.title}</p>
                            <ul>
                                {group.members.map((member, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: member }} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 AbdomenAtlas Project</p>
            </div>
        </div>
    );
};

export default Footer;
