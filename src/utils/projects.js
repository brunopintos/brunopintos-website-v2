import { ProjectAyp, ProjectCH, ProjectFigo, ProjectJShip } from "assets";

const projects = [
  {
    key: 1,
    title: "Cooper's Hawk App",
    link: "https://chwinery.com/",
    image: {
      src: ProjectCH,
      alt: "Project Cooper's Hawk",
    },
    description: {
      text1: "",
      link: "https://chwinery.com/",
      linkText: "Cooper's Hawk Winery & Restaurants",
      text2:
        " is an Illinois-based restaurant and winery chain with more than 40 locations, each including a full-service restaurant, tasting room, and retail store. I took part in the development of its app, which included the Location of the restaurants, Reservations, Gifting bottles, Menu, and more.",
      text3:
        "To do this, we used a React Native front-end and integrated it with an already built back-end. I was main front-end developer.",
    },
  },
  {
    key: 2,
    title: "Figo Pet Insurance App",
    link: "https://figopetinsurance.com/",
    image: {
      src: ProjectFigo,
      alt: "Project Figo Pet Insurance",
    },
    description: {
      text1: "",
      link: "https://figopetinsurance.com/",
      linkText: "Figo Pet Insurance",
      text2:
        " is a Chicago-based company that serves for pet owners to improve communication with Vets around the globe. The main feature built included the creation of a chat for their React Native app to accelerate the live communication. This included real-time communication, history of chats, notifications, and ratings.",
      text3:
        "To reach this live communication, we integrated with SignalR. I was front-end lead developer taking all major features.",
    },
  },
  {
    key: 3,
    title: "JShip website",
    link: "https://jship.com/",
    image: {
      src: ProjectJShip,
      alt: "Project JShip",
    },
    description: {
      text1: "",
      link: "https://jship.com/",
      linkText: "JShip",
      text2:
        " is a tool to ship packages directly from your home. It allows you to compare prices across different service providers taking into consideration size and weight to maximize productivity while selecting the best cost effective service.",
      text3:
        "To do this we used a React front-end and integrated with a Rails back-end. I was front-end developer.",
    },
  },
  {
    key: 4,
    title: "AyP soft website",
    link: "http://ayp.com.uy/",
    image: {
      src: ProjectAyp,
      alt: "Project AyP soft",
    },
    description: {
      text1: "I developed the website of ",
      link: "http://ayp.com.uy/",
      linkText: "AyP soft",
      text2:
        " — an Uruguay-based company specialized in Enterprise Resource Planning for small and medium-size companies. I took part in the creation of the responsive designs making the web suitable for desktop, tablets and mobile browsers.",
      text3:
        "To do this I used React.js, Next.js, and JavaScript. It was an individual development and I took all features.",
    },
  },
];

export default projects;
