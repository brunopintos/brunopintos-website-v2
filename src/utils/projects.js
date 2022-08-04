import {
  ProjectAaos,
  ProjectAyp,
  ProjectCH,
  ProjectFigo,
  ProjectJShip,
  ProjectLithium,
} from "assets";

const projects = [
  {
    key: 6,
    title: "AAOS Membership",
    type: "📱",
    link: "https://www.aaos.org/",
    image: {
      src: ProjectAaos,
      alt: "Project AAOS Membership",
    },
    description: {
      text1:
        "The American Academy of Orthopaedic Surgeons is the world's largest medical association of musculoskeletal specialists. It provides education and practice management services for orthopedic surgeons and allied health professionals. I took part in the development of its app, which included Podcasts, Member Directory, Messages, Online Learning, and more.",
      text2:
        "To do this, we used a React Native front-end and integrated it with an already built back-end. I was front-end developer.",
    },
    color: "#CC0033",
    year: "2022 in development...",
  },
  {
    key: 5,
    title: "Cooper's Hawk",
    type: "📱",
    link: "https://chwinery.com/coopers-hawk-mobile-app",
    image: {
      src: ProjectCH,
      alt: "Project Cooper's Hawk",
    },
    description: {
      text1:
        "Cooper's Hawk Winery & Restaurants is an Illinois-based restaurant and winery chain with more than 40 locations, each including a full-service restaurant, tasting room, and retail store. I took part in the development of its app, which included the Location of the restaurants, Reservations, Gifting bottles, Menu, and more.",
      text2:
        "To do this, we used a React Native front-end and integrated it with an already built back-end. I was main front-end developer.",
    },
    color: "#BD7F28",
    year: "2021-2022",
  },
  {
    key: 4,
    title: "Figo Pet Insurance",
    type: "📱",
    link: "https://figopetinsurance.com/pet-cloud",
    image: {
      src: ProjectFigo,
      alt: "Project Figo Pet Insurance",
    },
    description: {
      text1:
        "Figo Pet Insurance is a Chicago-based company that serves for pet owners to improve communication with Vets around the globe. The main feature built included the creation of a chat for their React Native app to accelerate the live communication. This included real-time communication, history of chats, notifications, and ratings.",
      text2:
        "To reach this live communication, we integrated with SignalR. I was front-end lead developer taking all major features.",
    },
    color: "#73DAD2",
    year: "2021",
  },
  {
    key: 3,
    title: "JShip",
    type: "🖥",
    link: "https://jship.com/",
    image: {
      src: ProjectJShip,
      alt: "Project JShip",
    },
    description: {
      text1:
        "JShip is a tool to ship packages directly from your home. It allows you to compare prices across different service providers taking into consideration size and weight to maximize productivity while selecting the best cost effective service.",
      text2:
        "To do this we used a React front-end and integrated with a Rails back-end. I was front-end developer.",
    },
    color: "#23D686",
    year: "2020-2021",
  },
  {
    key: 2,
    title: "Lithium Knowledge Base",
    type: "📱",
    link: "https://lithiumsoft.com/project/knowledge-base-react-native-app/",
    image: {
      src: ProjectLithium,
      alt: "Project Knowledge Base",
    },
    description: {
      text1:
        "A knowledge base app inspired by Notion and built to be used as a tool to help teams document projects, processes, and everything related to team workflow. Lithium KB is the internal knowledge base application of Lithium Software.",
      text2:
        "To do this we used ReactNative with Expo, and Apollo GraphQL. I was full-stack developer.",
    },
    color: "#ffc400",
    year: "2020",
  },
  {
    key: 1,
    title: "AyP Soft",
    type: "🖥",
    link: "http://ayp.com.uy/",
    image: {
      src: ProjectAyp,
      alt: "Project AyP soft",
    },
    description: {
      text1:
        "I developed the website of AyP soft — an Uruguay-based company specialized in Enterprise Resource Planning for small and medium-size companies. I took part in the creation of the responsive designs making the web suitable for desktop, tablets and mobile browsers.",
      text2:
        "To do this I used React.js, Next.js, and JavaScript. It was an individual development and I took all features.",
    },
    color: "#2096f3",
    year: "2019",
  },
];

export default projects;
