import {
  ProjectAaos,
  ProjectAyp,
  ProjectBxl,
  ProjectCarChat,
  ProjectCH,
  ProjectFigo,
  ProjectJShip,
  ProjectLithium,
  ProjectTHS,
} from "assets";

const projects = [
  {
    key: 9,
    title: "CarChat",
    type: "📱",
    link: "",
    image: {
      src: ProjectCarChat,
      alt: "Project CarChat",
    },
    description: {
      text1:
        "Carchat is a mobile app that connects drivers in a network to share real-time information about traffic conditions, road hazards, and other driving-related issues. The app also sends reminders about important car-related tasks, such as paying bills and scheduling maintenance appointments, to help users keep their cars in good condition. Carchat aims to make driving safer and more connected by providing a community-driven platform for sharing information and reminders.",
      text2:
        "This is an end-to-end project, where we use a React Native front-end and integrate it with an RoR back-end. I'm front-end lead developer.",
    },
    color: "#3eeeb2",
    year: "Under development...",
  },
  {
    key: 8,
    title: "The Humane Space",
    type: "📱",
    link: "https://www.thehumane.space/",
    image: {
      src: ProjectTHS,
      alt: "Project The Humane Space",
    },
    description: {
      text1:
        "The Humane Space is a mobile app that combines education and wellness to inspire users with a daily dose of wonderment and interdisciplinary understanding. The app offers curated experiences in multi-media to explore complex questions and encourages deep thinking and reflection. Users can connect with a community of learners, sharing insights and perspectives. The Humane Space provides a unique and fulfilling approach to personal growth.",
      text2:
        "This was an end-to-end project, where we used a React Native front-end and integrated it with an RoR back-end. I was front-end lead developer.",
    },
    color: "#000000",
    year: "2022-2023",
  },
  {
    key: 7,
    title: "Arly Teams",
    type: "📱",
    link: "https://apps.apple.com/us/app/bx-teams/id1604989916",
    image: {
      src: ProjectBxl,
      alt: "Project Arly Teams",
    },
    description: {
      text1:
        "BellXcel is a national nonprofit which builds the capacity of schools and community-based organizations (CBOs) to provide evidence-based, out-of-school-time (OST) programs for PreK-8 children. I took part in the development of its Arly Teams app, which included Posts, Messages, Pick Ups, and more.",
      text2:
        "To do this, we used a React Native front-end and integrated it with an already built back-end. I was front-end developer.",
    },
    color: "#8B2180",
    year: "2022",
  },
  {
    key: 6,
    title: "AAOS Membership",
    type: "📱",
    link: "https://apps.apple.com/ca/app/aaos-membership-app/id1635988366",
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
    year: "2022",
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
    title: "Pet Cloud",
    type: "📱",
    link: "https://apps.apple.com/us/app/pet-cloud/id1278520013",
    image: {
      src: ProjectFigo,
      alt: "Project Pet Cloud",
    },
    description: {
      text1:
        "Figo Pet Insurance is a Chicago-based company that serves for pet owners to improve communication with Vets around the globe. The main feature built included the creation of a chat for their Pet Cloud app to accelerate the live communication. This included real-time communication, history of chats, notifications, and ratings.",
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
