/* eslint-disable import/extensions */

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// Services Img Imports
import BigDataProcessing from '../assets/images/Services/big_data_processing.jpg';
import CloudData from '../assets/images/Services/cloud_data.jpg';
import DataGovernance from '../assets/images/Services/data_governance_&_quality.jpg';
import DataModeling from '../assets/images/Services/data_modeling_and_architecture.jpg';
import DataPipeline from '../assets/images/Services/data_pipeline.jpg';
import DataWarehousing from '../assets/images/Services/data_warehousing.jpg';

// TeamMembers
import coFounder from '../assets/images/TeamMembers/CO_Founder.jpg';
import CEO from '../assets/images/TeamMembers/CEO.jpg';

// Partner Img Imports
import accelerant from '../assets/images/Partner/accelerant.jpg';
import arbonne from '../assets/images/Partner/arbonne.jpg';
import augusta from '../assets/images/Partner/augusta.jpg';
import tide from '../assets/images/Partner/tide.jpg';

export const Services = [
  {
    title: 'Big Data Processing',
    imageUrl: BigDataProcessing,
    animation: 'left',
  },
  {
    title: 'Cloud Data Engineering',
    imageUrl: CloudData,
    animation: 'up',
  },
  {
    title: 'Data Governance & Quality',
    imageUrl: DataGovernance,
    animation: 'right',
  },
  {
    title: 'Data Modeling & Architecture',
    imageUrl: DataModeling,
    animation: 'left',
  },
  {
    title: 'Data Pipeline Development',
    imageUrl: DataPipeline,
    animation: 'up',
  },
  {
    title: 'Data Warehousing',
    imageUrl: DataWarehousing,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Recruiting App',
    imageUrl: Recruiting,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com /shots/15164950-Recruiting-app',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Stream+',
    imageUrl: Stream,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Aura',
    imageUrl: Aura,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'Surtido Rico',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'Courses Management',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for Racxstudio, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with Racxstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Racxstudio is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Shashank Sharma',
    position: 'CO Founder',
    imageUrl: coFounder,
  },
  {
    name: 'Kashyap Rupapara',
    position: 'CEO',
    imageUrl: CEO,
  },
];

export const Partners = [
  {
    company_name: 'Accelerant',
    imageUrl: accelerant,
  },
  {
    company_name: 'Arbonne',
    imageUrl: arbonne,
  },
  {
    company_name: 'Augusta',
    imageUrl: augusta,
  },
  {
    company_name: 'Tide',
    imageUrl: tide,
  },
];
