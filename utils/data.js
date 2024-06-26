import houmklo from "../public/PreviewImages/houmklo.png";
import ChoseYourCamp from "../public/PreviewImages/choseYourCamp.png";
import musique from "../public/PreviewImages/music.png";
import todo from "../public/PreviewImages/todo.png";
import Tiktok from "../public/PreviewImages/tiktok.png";
import UBank from "../public/PreviewImages/ubank.png";
import WhatsApp from "../public/PreviewImages/whatsapp.png";
import WhatsAppWeb from "../public/PreviewImages/whatsappWeb.png";
import service from "../public/PreviewImages/serviceProvider.png";
import green from "../public/PreviewImages/greenDeli.png";
import TantieFatou from "../public/PreviewImages/tantieFatou.png";
import ResidenceIT from "../public/PreviewImages/residenceIt.png";
import Microtic from "../public/PreviewImages/microtic.png";
import Bolstarr from "../public/PreviewImages/bolstar.png";
import BolstarUI from "../public/PreviewImages/BolstarUI.png";
import djamo from "../public/PreviewImages/djamo.png";
import Blog from "../public/PreviewImages/blogPreview.png";
import Quizz from "../public/PreviewImages/onLineApp.png";
import meet from "../public/PreviewImages/meet.png";
import alia from "../public/PreviewImages/alia.png";
import convserseWithMe from "../public/PreviewImages/converseWithMe.jpeg";
import designMyPDF from "../public/PreviewImages/designMypdf.png";
const projects = [
  {
    title: "DesignMyPDF",
    type: "web",
    projectType: 1,
    preview: designMyPDF,
    subtitle: "Une plateforme pour la création et gestion de PDF",
    description:
      "DesignMyPDF est une plateforme qui permet aux utilisateurs de créer, gérer et partager des documents PDF. Les utilisateurs peuvent personnaliser des modèles, ajouter des API clés, et visualiser les logs des actions effectuées.",
    technologies: [
      "Nextjs",
      "Mantine",
      "GoFiber",
      "Google Storage",
      "PostgreSQL",
      "JWT",
      "uuid-ossp",
    ],
    githubLink: "https://github.com/",
    openLink: "https://transactional-clone-frontend.vercel.app/",
  },
  {
    title: "Conference App ",
    type: "web",
    projectType: 1,
    preview: meet,
    subtitle: "Un site inspire de google ",
    description:
      "Il s'agit d'une application web ou vous pouvez tenir vos reunions ,possede la fonctionalites de reaction emojo,enregistrer en temps reel le meet et bien dautres  ",
    technologies: [
      "ReactJs",
      "Express",
      "Socket.io",
      "LocalStorage",
      "Tailwindcss",
      "Mantine",
    ],
    githubLink: "https://github.com/",
    openLink: "https://mygooglemeet.netlify.app/",
  },
  {
    title: "Online Multiplayer QuizzApp",
    type: "web",
    projectType: 1,
    preview: Quizz,
    subtitle: "Un site de quizz en ligne ",
    description:
      "Il s'agit d'une application web ou vous pouvez inviter vos amis a jouer ou etre invite un jeu de question reponse ,avec Timer et un classement en fin de partie  ",
    technologies: [
      "ReactJs",
      "Express",
      "Socket.io",
      "LocalStorage",
      "Tailwindcss",
      "Mantine",
    ],
    githubLink: "https://github.com/",
    openLink: "https://onlinequizzapp.netlify.app/",
  },
  {
    title: "ChoseYourCamp",
    type: "web",
    projectType: 1,
    preview: ChoseYourCamp,
    subtitle: "Un forum pour développeurs",
    description:
      "Dans ce forum ,nous retrouvons exactement les memes fonctionalites que medium.com a savoir la creation(avec un nouveau editeur code specialement pour loccasion) et la lecture d'article,et des addicitifs comme la possibilite de poster des projets realisés",
    technologies: [
      "Nextjs",
      "Tailwindcss",
      "Golang",
      "Mongodb",
      "JWT",
      "Gofiber",
    ],
    githubLink: "https://github.com/",
    openLink: "https://choseyourcamp.netlify.app",
  },

  {
    title: "Alia Landing page",
    type: "web",
    projectType: 1,
    preview: alia,
    subtitle: "Landing page presentant un service d'un IA ",
    description:
      "Il s'agit du site vitrine d'un SASS qui permet aux acteurs de loi en afrique francophone de senquerir des textes de lois",
    technologies: ["Reactjs", "CSS", , "mantine UI"],
    githubLink: "https://github.com/",
    openLink: "https://alia-legal.com/",
  },
  {
    title: "MusicStreaming",
    type: "web",
    projectType: 1,
    preview: musique,
    subtitle: "Plateforme de streaming de musique",
    description: "Il s'agit d'une application de streaming de musique",
    technologies: ["Reactjs", "TailwindCss", "React Router", "Mantine"],
    githubLink: "https://github.com/",
    openLink: "https://musicappstreaming.netlify.app/",
  },
  {
    title: "TantieFatou",
    type: "web",
    projectType: 1,
    preview: TantieFatou,
    subtitle: "Un site Ecommerce  ",
    description:
      "Tantie Fatou est un restaurant specialise dans la vente de produit fait a base de banane",
    technologies: ["HTML", "CSS", "JS", "Scroll Reveal", "Box Icons"],
    githubLink: "https://github.com/",
    openLink: "https://tantiefatou.netlify.app/",
  },
  {
    title: "WebWhatsApp",
    type: "web",
    projectType: 1,
    preview: WhatsAppWeb,
    subtitle: "Une application de messagerie web",
    description:
      "Il s'agit de l'application web du service messagerie whatsapp avec les fonctionalite comme messagerie instantée ,messagerie vocale,statut,Envoi de media,Lecture des media pour un chat particulier etc ",
    technologies: [
      "Reactjs",
      "Tailwindcss",
      "Firebase",
      "React-icons",
      "Context Api",
    ],
    githubLink: "https://github.com/",
    openLink: "https://webwhatsappclone.netlify.app/",
  },
  {
    title: "ResidenceIT",
    type: "web",
    projectType: 1,
    preview: ResidenceIT,
    subtitle:
      "Un site pour la mise en relation entre des clients et proprietaire de logements",
    description:
      "Ce site permet la creation de compte resident ,la gestion des logments ,la gestion des demandes de residence",
    technologies: [
      "Reactjs",
      "Tailwindcss",
      "ExpressJs",
      "Mongodb",
      "Firebase",
      "RecoilJs",
    ],
    githubLink: "https://github.com/",
    openLink: "https://residenceit.netlify.app/",
  },
  {
    title: "Bolstarr",
    type: "web",
    projectType: 1,
    preview: Bolstarr,
    subtitle:
      "Un site qui met en relation les agriculteurs et les fourniesseurs outils agricole",
    description: "La gestion des produits ,commande",
    technologies: ["Reactjs", "Tailwindcss", "RecoilsJs"],
    githubLink: "https://github.com/",
    openLink: "https://bolstar.netlify.app/",
  },
  {
    title: "Todo",
    type: "web",
    projectType: 1,
    preview: todo,
    subtitle: "Une application de gestion de tâches",
    description:
      "Une application qui gere les taches muni d'un systeme d'authentification le tout effectue sans une base de données",
    technologies: ["HTML", "CSS", "JS", "LocalStorage"],
    githubLink: "https://github.com/",
    openLink: "example",
  },
  {
    title: "Houmklo",
    type: "web",
    projectType: 1,
    preview: houmklo,
    subtitle: "Un site pour les designers",
    description:
      "Il s'agit d'une plateforme qui permet aux designers de se connecter ,de faire la veille technologique ,de poster leurs creations et ecrire des articles.",
    technologies: ["Reactjs", "Tailwindcss", "ExpressJs", "Nodejs", "JWT"],
    githubLink: "https://github.com/",
    openLink: "https://houmklodesign.netlify.app/",
  },
  {
    title: "Tiktok",
    type: "mobile",
    projectType: 2,
    preview: Tiktok,
    subtitle: "Un clone de l'application Tiktok",
    description:
      "Avec les fonctionalites comme l'authentication,la lecture de videos ,ajout de commentaires,ajout de musique ,post",
    technologies: [
      "React Native",
      "ContextApi",
      "AsyncStorage",
      "React native elements",
      "Superbase",
    ],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2Ffd.mp4?alt=media&token=08d8a70f-012d-462e-b960-dfca7ca33fa7",
  },
  {
    title: "WhatsApp",
    type: "mobile",
    projectType: 2,
    preview: WhatsApp,
    subtitle: "Une application de messagerie instantanée mobile",
    description:
      "Il s'agit du clone de l'application mobile du service messagerie whatsapp avec les fonctionalite comme messagerie instantée ,messagerie vocale,statut,Envoi de media,Lecture des media pour un chat particulier etc ",
    technologies: [
      "React Native",
      "ContextApi",
      "AsyncStorage",
      "React native elements",
    ],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-07-17%20at%2000.33.04.mp4?alt=media&token=df5eae76-0fd2-4e57-943d-66851d35733a",
  },
  {
    title: "ServiceProviderApp",
    type: "mobile",
    projectType: 2,
    preview: service,
    subtitle: "Une application pour les prestataires de services",
    description:
      "Cette Application met en relation les prestataires de services et les clients ,elle est muni d'un systeme de notification ,de messagerie instantee,de voir l'evolution de nos paiments recues et l'evolution de la demande de notre offre etc",
    technologies: [
      "React Native",
      "ContextApi",
      "AsyncStorage",
      "React native elements",
      "ExpressJs",
      "mongoDB",
      "Vicotory Native",
    ],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-07-19%20at%2002.32.19.mp4?alt=media&token=74be90e9-82f0-4a97-b999-f1f5948c6fad",
  },
  {
    title: "ConverseWithMe",
    type: "mobile",
    projectType: 2,
    preview: convserseWithMe,
    subtitle: "Une application d'apprentissage de langue",
    description:
      "Cette application  permet d'apprendre une langue soit par une communication avec IA qui vous entretient sur des multiples sujets de conversation ou communnicant avec des gens a travers le monde",
    technologies: [
      "React Native",
      "Context Api",
      "React-native-charts",
      "Nativewind",
    ],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FconverseWithMe.mp4?alt=media&token=56ec3204-4f33-4efb-9ef2-fb74dbda8c82",
  },
  {
    title: "UBank",
    type: "mobile",
    projectType: 2,
    preview: UBank,
    subtitle: "Une application bancaire",
    description:
      "Cette application bancaire permet les paiements de voir les statistiques",
    technologies: ["React Native", "Context Api", "React-native-charts"],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2Fubank.mp4?alt=media&token=258597ec-01e5-468d-b897-d8ef629c5508",
  },
  {
    title: "GreenDeli",
    type: "mobile",
    projectType: 2,
    preview: green,
    subtitle: "Une application de livraison de repas ",
    description: "Met en relation les restaurants et les clients",
    technologies: [
      "React native",
      "React native elements",
      "React-native-maps",
    ],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-01-16%20at%2022.58.02.mp4?alt=media&token=3efd2437-1295-4ff4-b652-da1480f41d41",
  },
  {
    title: "Blog App",
    type: "mobile",
    projectType: 2,
    preview: Blog,
    subtitle: "Un Linkedin pour designers ",
    description:
      "L'application permet aux designers d'avoir une plateforme mobile ou ils peuvent discuter et partager leur creation sans souci",
    technologies: ["React native", "Twrnc", "Expo Icons"],
    githubLink: "https://github.com/",
    openLink:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-07-20%20at%2000.11.15.mp4?alt=media&token=5991444d-689f-4829-a77f-28c252f76570",
  },
  {
    title: "Djamo",
    type: "Ui",
    projectType: 3,
    preview: djamo,
    subtitle: "Redesign du Site de djamo.ci",
    description: "Redesign du Site de djamo en choissisant des termes darks",
    technologies: ["ADOBE XD", "ADOBE PHOTOSHOP", "Adobe Illustrator"],
    githubLink: "https://github.com/",
    openLink:
      "https://xd.adobe.com/view/999b9794-bd5b-4c03-ac19-2c06a6de8284-ccc8/?fullscreen",
  },
  {
    title: "BolstarUi",
    type: "Ui",
    projectType: 3,
    preview: BolstarUI,
    subtitle:
      "Design de l'application web de mise en relation entre agriculteurs et fournisseurs de produits agricoles ",
    description:
      "Design de l'application web de mise en relation entre agriculteurs et fournisseurs de produits agricoles",
    technologies: ["ADOBE XD", "ADOBE PHOTOSHOP", "Adobe Illustrator"],
    githubLink: "https://github.com/",
    openLink:
      "https://xd.adobe.com/view/1cc84212-fbe5-4511-9e92-d85b5f884699-499b/screen/93b526d1-4a45-44bc-b0c1-1d4ec60b8b5b?fullscreen",
  },
];

export default projects;
