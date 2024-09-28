import SectionData from "./sectionData";
import ImageData from "./imageData";
import LinkData from "./linkData";
import { faLinkedinIn, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import imageThumb_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import avatarImageRef from '../assets/images/stEmail_imgs/ST_emAvatarCircleOngwb.png';
import avatarImageRMRef from '../assets/images/stEmail_imgs/ST_emAvatarCircleOngwbRM.png';
import resumeRef from '../assets/documents/resumeNfo_docs/JamesSanders_Resume_WebDev.pdf';

const terminusSectionData = new SectionData(
    'terminus',
    'terminus',
    'Terminus',
    `That's it, folks!`,
    'Nfo',
    `Thanks for visiting my custom corner of the web! I hope you had a positive experience. For more info, send an email, check my resume, or visit my links. See you on the flip side!`,
    'true',
    'Nfo',
    'terminusGallery',
    [],
    [],
    []     
);

const imageFull_01 = new ImageData(
    imageFull_01ref, 
    imageThumb_01ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const avatarImage = new ImageData(
    avatarImageRef, 
    avatarImageRef, 
    'avatar image-1 fullsize', 
    'avatarImage1-full-01', 
    'avatarImage1-full-01'
);

const avatarImageRM = new ImageData(
    avatarImageRMRef, 
    avatarImageRMRef, 
    'avatar image-RM fullsize', 
    'avatarImageRM-full', 
    'avatarImageRM-full'
);


// LinkData
// url
// icon
// title
// linkText
// linkDescription
// linkTileType

const myEmailLink = new LinkData(
    'mailto:jas.sandmaster@gmail.com',
    '-',
    'Email me here.',
    'Email Me',
    'Use this link to send me a message.',
    'A'
);

const myResumeLink = new LinkData(
    resumeRef,
    '-',
    'Review my resume.',
    'Resume',
    'Here is my resume for your review.',
    'A-FancyBox-1'
);


const myLinkedInLink = new LinkData(
    'https://www.linkedin.com/in/jim-tripp-sanders-10739495/',
    faLinkedinIn,
    'My LinkedIn Profile',
    'LinkedIn Link',
    '-',
    'B'
);

const myGitHubLink = new LinkData(
    'https://github.com/jas112',
    faGitAlt,
    'My GitHub Repository',
    'GitHub Link',
    '-',
    'B'
);

const myCargoLink = new LinkData(
    'https://cargocollective.com/TrippSanders',
    faBolt ,
    'My Cargocollective Site',
    'Cargocollective Link',
    '-',
    'B'
);

terminusSectionData.galleryImages.push(avatarImage);
terminusSectionData.galleryImages.push(avatarImageRM);

terminusSectionData.sectionLinksA.push(myEmailLink);
terminusSectionData.sectionLinksA.push(myResumeLink);

terminusSectionData.sectionLinksB.push(myLinkedInLink);
terminusSectionData.sectionLinksB.push(myGitHubLink);
terminusSectionData.sectionLinksB.push(myCargoLink);

export default terminusSectionData;