import alia from '../public/PreviewImages/alia.png';
import ChoseYourCamp from '../public/PreviewImages/choseYourCamp.png';
import convserseWithMe from '../public/PreviewImages/converseWithMe.jpeg';
import designMyPDF from '../public/PreviewImages/designMyPdf.jpeg';
import green from '../public/PreviewImages/greenDeli.png';
import meet from '../public/PreviewImages/meet.png';
import mongoGeniusPreview from '../public/PreviewImages/mongoGenius.png';
import Quizz from '../public/PreviewImages/onLineApp.png';
import ResidenceIT from '../public/PreviewImages/residenceIt.png';
import service from '../public/PreviewImages/serviceProvider.png';
import TantieFatou from '../public/PreviewImages/tantieFatou.png';
import Tiktok from '../public/PreviewImages/tiktok.png';
import UBank from '../public/PreviewImages/ubank.png';
import WhatsApp from '../public/PreviewImages/whatsapp.png';
import WhatsAppWeb from '../public/PreviewImages/whatsappWeb.png';
const projects = [
  {
    title: 'MongoGenius',
    type: 'web',
    projectType: 1,
    preview: mongoGeniusPreview,
    subtitle: 'Un générateur de données intelligent pour MongoDB',
    description:
      "MongoGenius est une plateforme innovante qui permet aux utilisateurs de générer des données réalistes et cohérentes pour leurs bases de données MongoDB. Grâce à une analyse automatique des schémas Mongoose, les utilisateurs peuvent facilement créer des données avec des relations intactes. L'interface moderne et intuitive facilite la gestion des données, tout en offrant des fonctionnalités avancées telles que la validation des contraintes Mongoose et la visualisation des relations entre les données. MongoGenius est conçu pour simplifier le processus de développement et améliorer l'efficacité des projets basés sur MongoDB.",
    technologies: [
      'Next.js',
      'Mantine',
      'Minio',
      'D3.js',
      'Mermaid',
      'Mongoose',
      'MongoDB',
      'Express',
    ],
    githubLink: 'https://github.com/yves1da2vinci3/MongoGenius-frontend',
    openLink: 'https://mongo-genius-front.vercel.app/',
    status: 0,
  },
  {
    title: 'DesignMyPDF',
    type: 'web',
    projectType: 1,
    preview: designMyPDF,
    subtitle: 'Une plateforme pour la création et gestion de PDF',
    description:
      'DesignMyPDF est une plateforme qui permet aux utilisateurs de créer, gérer et partager des documents PDF. Les utilisateurs peuvent personnaliser des modèles, ajouter des API clés, et visualiser les logs des actions effectuées.',
    technologies: [
      'Nextjs',
      'Mantine',
      'GoFiber',
      'Google Storage',
      'PostgreSQL',
      'JWT',
      'uuid-ossp',
    ],
    githubLink: 'https://github.com/',
    openLink: 'https://design-my-pdf.vercel.app/',
    status: 0,
  },
  {
    title: 'Conference App ',
    type: 'web',
    projectType: 1,
    preview: meet,
    subtitle: 'Un site inspire de google meet ',
    description:
      "Il s'agit d'une application web ou vous pouvez tenir vos reunions en temps reel,elle possede la fonctionalité de reaction emoji,levez les mains  et bien dautres  ",
    technologies: [
      'ReactJs',
      'Express',
      'Socket.io',
      'LocalStorage',
      'Tailwindcss',
      'Mantine',
      'LiveKit',
    ],
    githubLink: 'https://github.com/',
    openLink: 'https://mygooglemeet.netlify.app/',
    status: 1,
  },
  {
    title: 'Online Multiplayer QuizzApp',
    type: 'web',
    projectType: 1,
    preview: Quizz,
    subtitle: 'Un site de quizz en ligne ',
    description:
      "Il s'agit d'une application web ou vous pouvez inviter vos amis a jouer ou etre invite un jeu de question reponse ,avec Timer et un classement en fin de partie,les questions sont généres par l'IA  ",
    technologies: [
      'ReactJs',
      'Express',
      'Socket.io',
      'LocalStorage',
      'Tailwindcss',
      'Mantine',
      'Mistral Api',
    ],
    githubLink: 'https://github.com/',
    openLink: 'https://onlinequizzapp.netlify.app/',
    status: 1,
  },
  {
    title: 'ChoseYourCamp',
    type: 'web',
    projectType: 1,
    preview: ChoseYourCamp,
    subtitle: 'Un forum pour développeurs',
    description:
      "Dans ce forum ,nous retrouvons exactement les memes fonctionalites que medium.com a savoir la creation(avec un nouveau editeur code specialement pour loccasion) et la lecture d'article,et des addicitifs comme la possibilite de poster des projets realisés",
    technologies: ['Nextjs', 'Tailwindcss', 'Nestjs', 'Mongodb', 'JWT'],
    githubLink: 'https://github.com/',
    openLink: 'https://chose-your-camp-frontend.vercel.app/articles',
    status: 0,
  },

  {
    title: 'Alia Landing page',
    type: 'web',
    projectType: 1,
    preview: alia,
    subtitle: "Landing page presentant un service d'un IA ",
    description:
      "Il s'agit du site vitrine d'un SASS qui permet aux acteurs de loi en afrique francophone de senquerir des textes de lois",
    technologies: ['Reactjs', 'CSS', , 'mantine UI'],
    githubLink: 'https://github.com/',
    openLink: 'https://alia-legal.com/',
    status: 1,
  },
  {
    title: 'TantieFatou',
    type: 'web',
    projectType: 1,
    preview: TantieFatou,
    subtitle: 'Un site Ecommerce  ',
    description:
      'Tantie Fatou est un restaurant specialise dans la vente de produit fait a base de banane',
    technologies: ['HTML', 'CSS', 'JS', 'Scroll Reveal', 'Box Icons'],
    githubLink: 'https://github.com/',
    openLink: 'https://tantiefatou.netlify.app/',
    status: 1,
  },
  {
    title: 'WebWhatsApp',
    type: 'web',
    projectType: 1,
    preview: WhatsAppWeb,
    subtitle: 'Une application de messagerie web',
    description:
      "Il s'agit de l'application web du service messagerie whatsapp avec les fonctionalite comme messagerie instantée ,messagerie vocale,statut,Envoi de media,Lecture des media pour un chat particulier etc ",
    technologies: [
      'Reactjs',
      'Tailwindcss',
      'Firebase',
      'React-icons',
      'Context Api',
    ],
    githubLink: 'https://github.com/',
    openLink: 'https://webwhatsappclone.netlify.app/',
    status: 1,
  },
  {
    title: 'ResidenceIT',
    type: 'web',
    projectType: 1,
    preview: ResidenceIT,
    subtitle:
      'Un site pour la mise en relation entre des clients et proprietaire de logements',
    description:
      'Ce site permet la creation de compte resident ,la gestion des logments ,la gestion des demandes de residence',
    technologies: [
      'Reactjs',
      'Tailwindcss',
      'ExpressJs',
      'Mongodb',
      'Firebase',
      'RecoilJs',
    ],
    githubLink: 'https://github.com/',
    openLink: 'https://residenceit.netlify.app/',
    status: 1,
  },
  {
    title: 'UBank',
    type: 'mobile',
    projectType: 2,
    preview: UBank,
    subtitle: 'Une application de suivi des dépenses avec assistant IA',
    description:
      'Cette application permet de suivre vos dépenses et revenus avec un assistant financier IA intégré qui vous aide à analyser vos habitudes financières et vous donne des conseils personnalisés pour une meilleure gestion de votre argent',
    technologies: [
      'React Native',
      'Context Api',
      'React-native-charts',
      'Nativewind',
      'FastAPI',
      'PostgresQL',
      'MINIO',
      'OpenAI',
      'Langchain',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FWhatsApp%20Video%202024-11-08%20at%2007.56.13.mp4?alt=media&token=c6c0976f-5310-4099-8070-53dc9411347d',
    status: 0,
  },
  {
    title: 'Fixit',
    type: 'mobile',
    projectType: 2,
    preview: service,
    subtitle: 'Une application pour les prestataires de services',
    description:
      "Cette Application met en relation les prestataires de services et les clients ,elle est muni d'un systeme de notification ,de messagerie instantee,de voir l'evolution de nos paiments recues et l'evolution de la demande de notre offre etc",
    technologies: [
      'React Native',
      'ContextApi',
      'AsyncStorage',
      'React native elements',
      'ExpressJs',
      'mongoDB',
      'Vicotory Native',
      'Firebase',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-07-19%20at%2002.32.19.mp4?alt=media&token=74be90e9-82f0-4a97-b999-f1f5948c6fad',
    apkLink: 'https://example.com/fixit.apk',
    status: 1,
  },
  {
    title: 'Tiktok',
    type: 'mobile',
    projectType: 2,
    preview: Tiktok,
    subtitle: "Un clone de l'application Tiktok",
    description:
      "Avec les fonctionalites comme l'authentication,la lecture de videos ,ajout de commentaires,ajout de musique ,post",
    technologies: [
      'React Native',
      'ContextApi',
      'AsyncStorage',
      'React native elements',
      'Superbase',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2Ffd.mp4?alt=media&token=08d8a70f-012d-462e-b960-dfca7ca33fa7',
    status: 0,
  },
  {
    title: 'MessageMe',
    type: 'mobile',
    projectType: 2,
    preview: WhatsApp,
    subtitle: 'Une application de messagerie instantanée mobile',
    description:
      "Il s'agit du clone de l'application mobile du service messagerie whatsapp avec les fonctionalite comme messagerie instantée ,messagerie vocale,statut,Envoi de media,Lecture des media pour un chat particulier etc ",
    technologies: [
      'React Native',
      'ContextApi',
      'AsyncStorage',
      'React native elements',
      'FastAPI',
      'PostgresQL',
      'Minio',
      'Prometheus',
      'Grafana',
      'Redis',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-07-17%20at%2000.33.04.mp4?alt=media&token=df5eae76-0fd2-4e57-943d-66851d35733a',
    status: 0,
  },

  {
    title: 'ConverseWithMe',
    type: 'mobile',
    projectType: 2,
    preview: convserseWithMe,
    subtitle: "Une application d'apprentissage de langue",
    description:
      "Cette application  permet d'apprendre une langue soit par une communication avec IA qui vous entretient sur des multiples sujets de conversation ou communnicant avec des gens a travers le monde",
    technologies: [
      'React Native',
      'Context Api',
      'React-native-charts',
      'Nativewind',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FconverseWithMe.mp4?alt=media&token=56ec3204-4f33-4efb-9ef2-fb74dbda8c82',
    status: 0,
  },
  {
    title: 'GreenDeli',
    type: 'mobile',
    projectType: 2,
    preview: green,
    subtitle: 'Une application de livraison de repas ',
    description: 'Met en relation les restaurants et les clients',
    technologies: [
      'React native',
      'React native elements',
      'React-native-maps',
    ],
    githubLink: 'https://github.com/',
    openLink:
      'https://firebasestorage.googleapis.com/v0/b/myportfolio-527e2.appspot.com/o/VideoServices%2FSimulator%20Screen%20Recording%20-%20iPhone%2013%20-%202023-01-16%20at%2022.58.02.mp4?alt=media&token=3efd2437-1295-4ff4-b652-da1480f41d41',
    status: 1,
  },
];

export default projects;
