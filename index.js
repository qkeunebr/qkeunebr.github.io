(function(){//closure
	var app=angular.module('PersonalWebsite',['pascalprecht.translate',"ngRoute"]).config(function($translateProvider){
    		$translateProvider.translations('en', {
    			
          TITLE_HOME: 'Home',
    			NAVBAR_HOME: 'HOME',
    			NAVBAR_PROJECTS: 'PROJECTS',
          NAVBAR_CV: 'RESUME',
    			NAVBAR_CONTACT: 'CONTACT',
    			WELCOME: 'Welcome',
    			GENERAL: "Hello ! My name is Quentin, I'm 25, French and I work at Apple. This website is aimed at introducing myself as well as presenting the main projects I've been working on over the last few years. ",
    			STUDIES: "In 2017, I graduated with a Master's degree in Computer Science from the University of Technology of Compiègne (France). Before starting my full-time at Apple, I did two 6-month internships as a Software Engineer in the same company, in California. Living the American dream was definitely more exciting than everything I could have expected. I have learned so much and met so many smart people from all around the world. I'm very grateful for this amazing Californian journey. It'll always be hard to explain how attached and indebted I am to Apple.",
    			GOAL: "On this website, you can have a look at my projects, check out my resume and get in touch with me ! Browse safe ! ヅ",
    			BUTTON_TEXT_EN: 'English',
    			BUTTON_TEXT_DE: 'German',
    			BUTTON_TEXT_FR: 'French',
    			TITLE_ASIDE: 'About me',
    			TEXT_ASIDE: 'Quentin Keunebroek',
          TEXTSECOND_ASIDE: 'Works at Apple',
          TEXTTHIRD_ASIDE: 'Former Software Engineer Student at UTC',
    			SOCIAL_NETWORK: 'Follow me on social networks!',
          PROJECTS_TITLE: 'Projects',
          SEARCH: 'Project title',
          HUTECH_TITLE: "Humanities and Technology",
          HUTECH_TITLE_MIN: "New Bachelor of Engineering at the UTC",
          HUTECH_GENERAL: '"Although technical discoveries, skills and achievements have accompanied the human species ever since homo sapiens, the world today needs engineers and scientists who are aware of the challenges in human and societal terms when new technologies are developed. In just the last two decades, the way we live, work and even think has changed radically. Managers must control and accompany developments, while retraining their curiosity, their inventiveness and creativity, all of which are essential for innovative solutions, products and services to benefit all."',
          HUTECH_PERSONAL: "I was so lucky to be part of this new course at the UTC. I've had the chance to participate in building it up and I took part in many projects that require both technical and human skills.",
          HUTECH_GOAL: '"Candidates for Hutech must firstly present excellent baccalaureate marks, then must demonstrate their sensitivity to mixed cultural-technical issues, their interest for the history of techniques and technologies an awareness of possible impacts on Society, have a propensity for abstract thinking, self-questioning, conceptualization, reformulation of problems encountered and a prediction as future committed actors in tomorrows technological developments."',
          HUTECH_ASIDE_FIRST: "A 3-year course at the UTC",
          HUTECH_ASIDE_SECOND: "New approach to the engineering",
          HUTECH_ASIDE_THIRD: "Philosophy, epistemology, history, innovation, economics, languages, computer science, logic, mathematics, algorithms, value analysis",
          HUTECH_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://www.utc.fr/en/courses-and-training/the-utc-engineering-diploma/humanities-and-technology-course-hutech.html'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          GEO_TITLE:"GeoCatch",
          GEO_TITLE_MIN:"Interactive Android game",
          GEO_GENERAL:"I realized this project as a member of a 4 person team at the UTC, in Spring 2016.",
          GEO_GOAL:"GeoCatch is an interactive Android game, in which two teams use geolocation to achieve two main goals: the capture of different control points and the elimination of the opponent team. The goal was to make it possible for a large panel of users to play a game online and go out in the city and enjoy the open air at the same time. It's also a good opportunity to discover new places in town.",
          GEO_PERSONAL:"The project was the opportunity to reinforce my skills in Java and Android as well as to discover multiagents systems (the whole app is structured with different agents : for examples, the control points have their own behaviours and an agent is responsible for the communication between the views and the REST server).",
          GEO_ASIDE_FIRST:"GeoCatch",
          GEO_ASIDE_SECOND:"Interactive Android game, UTC (France)",
          GEO_ASIDE_THIRD:"Android Studio, Java, REST, Jade",
          GEO_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://github.com/KerDelos/GeoCatch'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          UTComputer_TITLE:"UTComputer",
          UTComputer_TITLE_MIN:"Calculator written in C++",
          UTComputer_GENERAL:"I realized this project as a member of a 2 person team at the UTC, in Spring 2016.",
          UTComputer_GOAL:"UTComputer is a calculator based on the Reverse Polish Notation that can deal with various types of numbers : complex, integers, rationals and even literal expressions. It's written in C++ with the framework Qt.",
          UTComputer_PERSONAL:"The project was the opportunity to reinforce my skills in OOP (by implementing some design patterns) and to learn the language C++.",
          UTComputer_ASIDE_FIRST:"UTComputer",
          UTComputer_ASIDE_SECOND:"Calculator in C++, UTC (France)",
          UTComputer_ASIDE_THIRD:"Qt, OOP, UML, C++",
          UTComputer_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://github.com/qkeunebr/UTComputer'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          
          SorbonneONU_TITLE: "Sorbonne for the United Nations",
          SorbonneONU_MIN: "Member of UNICEF",
          SorbonneONU_GENERAL: "Starting Fall 2015, I was a member of the association Sorbonne for the United Nations at Sorbonne University in Paris. I focused on the UNICEF section.",
          SorbonneONU_GOAL: "Sorbonne for the United Nations is a student association aimed at raising awareness of UN institutions. It promotes the United Nations and international cooperation in the student world. ",

          CROIX_TITLE:"Pegass - Croix-Rouge française",
          CROIX_TITLE_MIN:"Web development",
          CROIX_GENERAL:"I realized this project as a 5 person team at the UTC, in Fall 2015.",
          CROIX_GOAL:"The goal was to improve the internal web application Pegass, which is aimed at managing all the volunteer activities in the association Croix-Rouge française.",
          CROIX_PERSONAL:"The project was the opportunity to improve my skills in project management and web development.",
          CROIX_ASIDE_FIRST:"Pegass improvement",
          CROIX_ASIDE_SECOND:"Croix-Rouge française, Paris (France)",
          CROIX_ASIDE_THIRD:"LeafletJS, AngularJS, PHP, MySQL, GeoJSON, Ajax, Bootstrap",
          CROIX_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='http://www.croix-rouge.fr/French-Red-Cross'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          BIO_TITLE: "BiPod - French Start-up",
          BIO_TITLE_MIN: "iOS Health App",
          BIO_GENERAL: "I realized this project in Autumn 2015 at the UTC.",
          BIO_GOAL:"The goal was to design an iOS Health App called BiPod for a french start-up. The app helps the users to maintain good posture. Unfortunately, the way the app works remains, for now, confidential.",
          BIO_PERSONAL:"The project was the opportunity to discover the iOS world, especially the environment Xcode and the programming language Swift.",
          BIO_ASIDE_FIRST: "BiPod - iOS Health App",
          BIO_ASIDE_SECOND: "French Start-up, Compiègne (France)",
          BIO_ASIDE_THIRD: "Functional specifications, Xcode, Swift",
          MBTI_TITLE: "MBTI personality",
          MBTI_TITLE_MIN: "Expert system",
          MBTI_GENERAL: "I realized this project with another student in Fall 2015 at the UTC.",
          MBTI_GOAL:"It is an expert system written in Lisp that helps a user to determine his MBTI personality which indicates psychological preferences in how the user perceives the world and makes decisions. The system uses an inference engine that relies on a process called forward-chaining. Basically, we give the engine data about the user's behavior and the system uses a set of rules to extract more data, until it is able to make a final conclusion about the MBTI personality of the user.",
          MBTI_PERSONAL:"This expert system was developed as the final project of an Artifical intelligence class. It was the opportunity to discover this new concept and to learn about the language Lisp.",
          MBTI_ASIDE_FIRST: "MBTI personality",
          MBTI_ASIDE_SECOND: "Expert System (UTC, France)",
          MBTI_ASIDE_THIRD: "Artificial Intelligence, Lisp",
          ANDROID_TITLE: 'ReuniUTC',
          ANDROID_TITLE_MIN: 'Android App to schedule meetings at the UTC',
          ANDROID_GENERAL:"The UTC is based on the fact that each semester, the students are free to choose the courses they want to take. As a result, there's a large diversity of schedules and it is relatively complicated to organize meetings between students.",
          ANDROID_GOAL: "ReuniUTC makes it possible to overcome this difficulty. It relies on an algorithm that compares different schedules and returns a good time slot for a meeting between students.",
          ANDROID_PERSONAL: "This project was the opportunity to discover the Android world, especially the environement Android Studio and the programming language Java. ",
          ANDROID_ASIDE_FIRST:"ReuniUTC - Android App",
          ANDROID_ASIDE_SECOND:"Help to schedule meetings at the UTC",
          ANDROID_ASIDE_THIRD:"School project (Fall 2014, 5 months) - Android Studio, Java",
          BRAUNSCHWEIG_TITLE:"Programming distributed embedded systems",
          BRAUNSCHWEIG_TITLE_MIN:"Technische Universität Braunschweig",
          BRAUNSCHWEIG_GENERAL:"This is a project I worked on during my Erasmus semester at Technische Universität Braunschweig, in Spring 2014. I actually helped two other German students to realize this project.",
          BRAUNSCHWEIG_GOAL:"The aim was to discover and program a microcontrolor and different bus systems (Inter Integrated Circuit), sensors (temperature, obstacles detection), a LCD display, using the programming language C.",
          BRAUNSCHWEIG_PERSONAL:"",
          BRAUNSCHWEIG_ASIDE_FIRST:"Programming distributed and embedded systems",
          BRAUNSCHWEIG_ASIDE_SECOND:"Spring 2014 (4 months)",
          BRAUNSCHWEIG_ASIDE_THIRD:"A team with 3 students at TU Braunschweig",
          BRAUNSCHWEIG_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://www.ibr.cs.tu-bs.de/courses/ss14/tpcm-esys/index.html'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          PHITECO_TITLE:"From Industrial to Cognitive Capitalism",
          PHITECO_TITLE_MIN:'Seminar "Philosophy, Technology and Cognition"',
          PHITECO_GENERAL:"This project is a report I wrote within the seminar PHITECO (Philosophy, Technology and Cognition) at the University of Technology of Compiègne, in Spring 2014.",
          PHITECO_GOAL:"The aim of the report was to express some issues that the industrial capitalism is facing nowadays, especially in France, and then to introduce the new model of cognitive capitalism defined by the economist Yann Moulier-Boutang.",
          PHITECO_PERSONAL:"I really enjoyed writing about this topic because as a software engineering student, I think it's fundamental to understand what are the stakes of today's digital world.",
          PHITECO_ASIDE_FIRST:"From Industrial to Cognitive Capitalism",
          PHITECO_ASIDE_SECOND:"Seminary Philosophy, Technology and Cognition",
          PHITECO_ASIDE_THIRD:"Spring 2014 (4 months)",
          PHITECO_LINK: "",
          MOOC_TITLE:"Reinvent pedagogy in the MOOC wave",
          MOOC_TITLE_MIN:"Value analysis",
          MOOC_GENERAL:"This project was realized within value analysis class, in Fall 2013 at the UTC.",
          MOOC_GOAL:"The aim was to understand and to analyse the pedagogical consequences of Massive Online Open Courses (MOOCs) and then to suggest alternative ideas.",
          MOOC_PERSONAL:"In the digital age, MOOCs come within a movement particularly interesting and logical from an educational perspective. However, there's still much work to do from a pedagogical perspective. What are the pros and cons of such a technological innovation? How can we use the power of MOOCs in order to improve pedagogy without destroying our current system?",
          MOOC_ASIDE_FIRST:"Reinvent pedagogy in the MOOC movement",
          MOOC_ASIDE_SECOND:"Team of 6 students (UTC, Compiègne)",
          MOOC_ASIDE_THIRD:"Fall 2013 (4 months)",
          MOOC_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='http://www.internetactu.net/2013/02/20/mooc-la-standardisation-ou-linnovation/'>Learn more</a> <i class='fa fa-hand-o-left'></i>",
          ARCHI_TITLE:"From theatre architecture to spectators",
          ARCHI_TITLE_MIN:"History of Technologies",
          ARCHI_GENERAL:"This is a report I wrote within a History of Technologies class, in Fall 2012.",
          ARCHI_GOAL:"The aim was to show that the architecture of theatres is a fundamental aspect to understand interactions between societies and performing arts. How are both worlds connected to each other? How has the architecture of theatres revealed its social role over the years? I tried to argue that the architecture of theatres is the result of an evolution of mentalities in societies and is the response to political and economical stakes.",
          ARCHI_PERSONAL:"In the digital age, MOOCs come within a movement particularly interesting and logical from an educational perspective. However, there's still much work to do from a pedagogical perspective. What are the pros and cons of such a technological innovation? How can we use the revolution of the MOOCs in order to improve pedagogy without destroying our current system?",
          ARCHI_ASIDE_FIRST:"From theatre architecture to spectators",
          ARCHI_ASIDE_SECOND:"History of Technologies",
          ARCHI_ASIDE_THIRD:"Fall 2012 (4 months)",
          ARCHI_LINK: "Picture: Ancient theatre in Vaison-la-Romaine (Vaucluse, France)",
          THEATRE_TITLE:"Theatre Conservatory",
          THEATRE_TITLE_MIN:"Ermont-Eaubonne (2002 - 2012)",
          THEATRE_GENERAL:"<ol><li>2002 - 2003 : <i>La princesse capricieuse</i> by Patrick Mecucci</li><li>2005 - 2006 : <i>Amadeus Mozart</i></li><li>2006 - 2007 : <i>Les aventures d'Auren, le petit serial killer</i> by Joseph Danan</li><li>2007 - 2008 : <i>The Middle Class Gentleman<i> by Molière</li><li>2008 - 2009 : <i>A Midsummer Night's Dream</i> by William Shakespeare</li><li>2009 - 2010 : <i>The seagull</i> by Chekhov</li><li>2010 - 2011 : <i>The Open-Space Office Killed Me</i> by Alexandre des Isnards and Thomas Zuber</li><li>2011 - 2012 : <i>Guitou</i> by Fabrice Melquiot</li></ol>",
          THEATRE_GOAL:"",
          THEATRE_PERSONAL:"",
          THEATRE_ASIDE_FIRST:"Theatre Conservatory",
          THEATRE_ASIDE_SECOND:"Ermont-Eaubnne",
          THEATRE_ASIDE_THIRD:"2002-2012",
          THEATRE_LINK: "",
          METHOD_TITLE:"Contemporary Engineer's Methodology",
          METHOD_TITLE_MIN:"Value analysis",
          METHOD_GENERAL:"This project was realized within a value analysis class with the help of 7 other students, in Fall 2013.",
          METHOD_GOAL:"The aim was to establish a general methodology of the contemporary engineer. How is the engineer supposed to act in today's organisations? What competencies should he use in order to manage complex projects? What tools are needed to lead a team of experts?",
          METHOD_PERSONAL:"Engineers are technology enthusiasts who are able to think about the human stakes of today's technologies. Also, they are methodologists whose expertise is defined in terms of questioning. He's not a scientist anymore, who just applies his knowledge but a player of the current complexity. Finally, he is a leader, a pedagogue who knows how to put labor groups in innovation states leading to success.",
          METHOD_ASIDE_FIRST:"Contemporary Engineer's Methodology",
          METHOD_ASIDE_SECOND:"Value Analysis (8 students)",
          METHOD_ASIDE_THIRD:"Fall 2013 (UTC, Compiègne)",
          METHOD_LINK: "",
          CV_PIC:"<a class='cveffect' target='blank' href='pdf/Keunebroek_Quentin_resume.pdf'><img src='images/Keunebroek_Quentin_resume.png' width='400px'/></a>",
  			  RESUME: 'Resume',
        })
  			  .translations('fr', {
  			 	TITLE_HOME: 'Accueil',
  			 	NAVBAR_HOME: 'ACCUEIL',
  			 	NAVBAR_PROJECTS: 'PROJETS',
  			 	NAVBAR_CV: 'CV',
  			 	NAVBAR_CONTACT: 'CONTACT',
  			 	WELCOME: 'Bienvenue',
    			GENERAL: "Bonjour ! Je m'appelle Quentin, j'ai 25 ans et je travaille chez Apple. Ce site a pour objectifs de me présenter ainsi que faire découvrir les principaux projets auxquels j'ai participé ces dernières années.",
    			STUDIES: "En 2017, j'ai obtenu un diplôme d'Ingénieur en Informatique à l'Université de Technologie de Compiègne. Avant d'être embauché, j'ai effectué deux stages de 6 mois chez Apple, en tant qu'Ingénieur Informatique. Cette expérience californienne était extrêmement riche; j'ai beaucoup appris et rencontré plein d'autres personnes venues du monde entier. Je suis très reconnaissant de l'opportunité qui m'a été offerte et très attaché à l'entreprise ainsi qu'à ses employés. ",
    			GOAL: "Sur ce site, vous pouvez voir mes projets, jeter un coup d'oeil à mon CV et prendre contact avec moi. Bonne visite ! ヅ",
    			BUTTON_TEXT_EN: 'Anglais',
    			BUTTON_TEXT_FR: 'Français',
    			TITLE_ASIDE: 'À propos de moi',
    			TEXT_ASIDE: "Quentin Keunebroek",

    			TEXTSECOND_ASIDE: 'Travaille chez Apple',
          TEXTTHIRD_ASIDE: 'Ancien Étudiant-Ingénieur à l\'UTC',
          SOCIAL_NETWORK: 'Retrouvrez-moi sur les réseaux sociaux !',
          PROJECTS_TITLE: 'Projets',
          SEARCH: 'Titre de projet',
          HUTECH_TITLE: "Humanités et Technologie",
          HUTECH_TITLE_MIN: "Un nouveau cursus d'ingénieurs à l'UTC",
          HUTECH_GENERAL: "Humanités et Technologie est un nouveau cursus d'ingénieurs à l'Université de Technologie de Compiègne. Il est ouvert simultanément aux bacheliers scientifiques, littéraires et économiques. Ce cursus articule de façon cohérente les matières scientifiques et les sciences humaines, l'idée générale étant que pour être acteur du monde technologique, il faut à la fois comprendre la façon dont fonctionnent les technologies qui nous entourent, mais aussi en saisir les enjeux et impacts humains. 'Notre monde a besoin d'ingénieurs capables de porter en amont des projets les enjeux humains ou sociaux des développements technologiques.'",
          HUTECH_PERSONAL: "J'ai eu l'immense opportunité d'être étudiant au sein de la première promotion du cursus. J'ai pu participer au suivi, aux discussions et réajustements. J'ai également pris part à de nombreux projets qui requièrent à la fois des compétences techniques et humaines.",
          HUTECH_GOAL: "'Un étudiant HuTech aura donc développé sa capacité à conjuguer différentes logiques : exigences industrielles et entrepreneuriales (performances fonctionnelle, technique et économique du produit) et valeurs pour la société et pour l'humain. À l'articulation entre projet industriel et projet ou vision pour l'humanité, il y a... vous, acteur de la conception, animé par vos valeurs, et doté d'une responsabilité et d'un libre arbitre.'",
          HUTECH_ASIDE_FIRST: "A 3-year course at the UTC",
          HUTECH_ASIDE_SECOND: "New approach to the engineering",
          HUTECH_ASIDE_THIRD: "Philosophy, epistemology, history, innovation, economics, languages, computer science, logic, mathematics, algorithms, value analysis",
          HUTECH_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://www.utc.fr/en.html'>En savoir plus</a> <i class='fa fa-hand-o-left'></i>",
          
          GEO_TITLE:"GeoCatch",
          GEO_TITLE_MIN:"Jeu Android interactif",
          GEO_GENERAL:"J'ai réalisé ce projet au sein d'une équipe de 4 étudiants à l'UTC, au printemps 2016.",
          GEO_GOAL:"GeoCatch est un jeu interactif sous Android, dans lequel deux équipes s'affrontent et utilisent la géolocalisation pour remplir deux objectifs principaux: la capture de points de contrôle et l'élimination de l'équipe adverse. L'objectif était d'offrir à un large panel d'utilisateurs la possibilité, à la fois de jouer en ligne et de sortir de chez soi et profiter de l'air libre. C'est aussi une bonne occasion pour découvrir de nouveaux lieux en ville.",
          GEO_PERSONAL:"Le projet était l'occasion de renforcer mes compétences en Java et en Android mais aussi de découvrir les systèmes multi-agents (l'application est structurée à l'aide d'agents: par exemples, les points de contrôle ont leur propre comportement et c'est un agent qui est responsable de la communication entre les vues Android et le serveur REST).",
          GEO_ASIDE_FIRST:"GeoCatch",
          GEO_ASIDE_SECOND:"Jeu interactif Android, UTC (France)",
          GEO_ASIDE_THIRD:"Android Studio, Java, REST, Jade",
          GEO_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://github.com/KerDelos/GeoCatch'>Learn more</a> <i class='fa fa-hand-o-left'></i>",


          UTComputer_TITLE:"UTComputer",
          UTComputer_TITLE_MIN:"Calculatrice en C++",
          UTComputer_GENERAL:"J'ai réalisé ce projet avec un autre étudiant à l'UTC, au printemps 2016.",
          UTComputer_GOAL:"UTComputer est une calculatrice basée sur la notation polonaise inversée, qui peut traiter différents types de nombres : des complexes, des entiers, des rationnels et même des expressions littérales. C'est codé en C++ et utilise le framework Qt.",
          UTComputer_PERSONAL:"Ce projet a été l'occasion de renforcer mes compétences en programmation orientée objets (utilisation de plusieurs design patterns) et d'apprendre le langage C++.",
          UTComputer_ASIDE_FIRST:"UTComputer",
          UTComputer_ASIDE_SECOND:"Calculatrice en C++, UTC (France)",
          UTComputer_ASIDE_THIRD:"Qt, PPP, UML, C++",
          UTComputer_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://github.com/qkeunebr/UTComputer'>Learn more</a> <i class='fa fa-hand-o-left'></i>",


          

          CROIX_TITLE:"Pegass - Croix-Rouge française",
          CROIX_TITLE_MIN:"Développement Web",
          CROIX_GENERAL:"Ce projet a été réalisé à l'aide de 4 autres étudiants à l'UTC, en automne 2015.",
          CROIX_GOAL:"L'objectif du projet était d'améliorer l'application web interne Pegass chargée de gérer l'ensemble des activités bénévoles de l'association. Le travail effectué demeure pour l'instant confidentiel.",
          CROIX_PERSONAL:"Le projet a été l'occasion d'améliorer mes compétences en gestion de projet et en développement web.",
          CROIX_ASIDE_FIRST:"Amélioration de Pegass",
          CROIX_ASIDE_SECOND:"Croix-Rouge française, Paris (France)",
          CROIX_ASIDE_THIRD:"LeafletJS, AngularJS, PHP, MySQL, GeoJSON, Ajax, Bootstrap",
          CROIX_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='http://www.croix-rouge.fr/'>En savoir plus</a> <i class='fa fa-hand-o-left'></i>",
          BIO_TITLE: "BiPod - Start-up française",
          BIO_TITLE_MIN: "Application iOS Santé",
          BIO_GENERAL: "Ce projet a été réalisé à l'automne 2015 au Centre d'Innovation de l'UTC.",
          BIO_GOAL:"L'objectif était de réaliser le design d'une application iOS santé (BiPod) pour une start-up française. L'application permet d'aider les utilisateurs à maintenir une bonne posture.",
          BIO_PERSONAL:"Le projet était l'occasion de découvrir l'univers iOS, notamment l'environnement Xcode et le language de programmation objet Swift. Malheureusement, la façon dont fonctionne l'application demeure pour l'instant confidentielle.",
          BIO_ASIDE_FIRST: "BiPod - Application iOS Santé",
          BIO_ASIDE_SECOND: "Start-up française, Compiègne (France)",
          BIO_ASIDE_THIRD: "Spécifications fonctionnelles, Xcode, Swift",
          MBTI_TITLE: "Profil MBTI",
          MBTI_TITLE_MIN: "Système expert",
          MBTI_GENERAL: "J'ai réalisé ce projet avec un autre étudiant à l'automne 2015, à l'UTC.",
          MBTI_GOAL:"C'est un système expert écrit en Lisp qui aide l'utilisateur à déterminer son profil MBTI. Le profil MBTI est un ensemble de préférences psychologiques qui décrivent comment l'individu perçoit le monde et la manière dont il agit en société. Le système se fonde sur un moteur d'inférences qui fonctionne à partir d'un process appelé chaînage-avant. On donne au moteur un ensemble de données sur le comportement de l'utilisateur et le système utilise des règles pour extraire encore plus de données et déduire une conclusion sur le profil MBTI de l'utilisateur. ",
          MBTI_PERSONAL:"Le projet a été réalisé en tant que projet final d'un cours sur l'intelligence artificielle. C'était donc l'occasion de découvrir ce nouveau concept et de pratiquer le langage Lisp.",
          MBTI_ASIDE_FIRST: "Profil MBTI",
          MBTI_ASIDE_SECOND: "Système expert",
          MBTI_ASIDE_THIRD: "Intelligence Artificielle, Lisp",
          ANDROID_TITLE: 'ReuniUTC',
          ANDROID_TITLE_MIN: "Application Android d'aide à la planification de réunions à l'UTC",
          ANDROID_GENERAL:"L’Université de Technologie de Compiègne fonctionne sur le principe suivant : chaque semestre, les étudiants choisissent les cours qu’ils souhaitent suivre en fonction de leurs objectifs professionnels et de leurs intérêts personnels. À ce titre, il est relativement difficile d’organiser des réunions entre étudiants, compte tenu de la diversité des emplois du temps.",
          ANDROID_GOAL: "ReuniUTC permet de pallier cette difficulté. L'application repose sur un algorithme qui superpose les emplois du temps des membres de la réunion, et retourne des possibilités de créneaux pour organiser cette réunion.",
          ANDROID_PERSONAL: "Ce projet a été l'opportunité de découvrir l'univers d'Android, notamment l'environnement Android Studio et le langage de programmation objet Java.",
          ANDROID_ASIDE_FIRST:"ReuniUTC - Application Android",
          ANDROID_ASIDE_SECOND:"Aide à la planification de réunions à l'UTC",
          ANDROID_ASIDE_THIRD:"Projet universitaire (Automne 2014, 5 mois) - Android Studio, Java",
          BRAUNSCHWEIG_TITLE:"Programmation de systèmes distribués et embarqués",
          BRAUNSCHWEIG_TITLE_MIN:"Technische Universität Braunschweig",
          BRAUNSCHWEIG_GENERAL:"C'est un projet auquel j'ai participé lors de mon semestre Erasmus à la Technische Universität Braunschweig, au printemps 2014. Ce projet a été réalisé avec deux autres étudiants allemands.",
          BRAUNSCHWEIG_GOAL:"L'objectif était de découvrir et de programmer (dans le language de programmation C) un type de microcontrôleur et différents composants tels qu'un système de bus (Inter Integrated Circuit), des capteurs (température, détection d'obstacles), un écran LCD.",
          BRAUNSCHWEIG_PERSONAL:"",
          BRAUNSCHWEIG_ASIDE_FIRST:"Programmation de systèmes distribués et embarqués",
          BRAUNSCHWEIG_ASIDE_SECOND:"Printemps 2014 (4 mois)",
          BRAUNSCHWEIG_ASIDE_THIRD:"Une équipe de 3 étudiants à la TU Braunschweig",
          BRAUNSCHWEIG_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='https://www.ibr.cs.tu-bs.de/courses/ss14/tpcm-esys/index.html'>En savoir plus</a> <i class='fa fa-hand-o-left'></i>",
          PHITECO_TITLE:"Du capitalisme industriel au capitalisme cognitif",
          PHITECO_TITLE_MIN:"Séminaire Philosophie, Technologie et Cognition à l'UTC",
          PHITECO_GENERAL:"C'est un mémoire que j'ai rédigé dans le cadre du séminaire PHITECO (Philosophie, Technologie et Cognition) à l'UTC, au printemps 2014.",
          PHITECO_GOAL:"L'objectif de ce projet était d'exprimer certaines failles du capitalisme industriel pour ensuite introduire le nouveau modèle du capitalisme cognitif (théorisé par l'économiste Yann Moulier-Boutang). Le capitalisme cognitif est une nouvelle forme de capitalisme qui repose sur le concept de contribution universelle, c'est-à-dire la production intense de connaissances par l'homme et pour l'homme.",
          PHITECO_PERSONAL:"Ce projet a été largement inspiré par les ouvrages L'abeille et l'économiste et Le capitalisme cognitif: la nouvelle grande transformation de Yann Moulier-Boutang. J'ai beaucoup apprécié faire ce mémoire; je pense qu'il est fondamental pour un étudiant en ingénierie informatique d'avoir une vision plus globale des enjeux de notre monde numérique.",
          PHITECO_ASIDE_FIRST:"Du capitalisme industriel au capitalisme cognitif",
          PHITECO_ASIDE_SECOND:"Séminaire Philosophie, Technologie et Cognition à l'UTC",
          PHITECO_ASIDE_THIRD:"Printemps 2014",
          PHITECO_LINK: "",
          MOOC_TITLE:"Réinventer la pédagogie dans la vague des MOOCs",
          MOOC_TITLE_MIN:"Analyse de la valeur",
          MOOC_GENERAL:"Ce projet a été réalisé dans le cadre d'un cours sur l'analyse de la valeur, à l'automne 2013.",
          MOOC_GOAL:"L'objectif était de comprendre et d'analyser l'impact des MOOCs (Massive Online Open Courses) sur la pédagogie et la formation universitaire, pour ensuite suggérer des idées alternatives.",
          MOOC_PERSONAL:"À l'ère du numérique, les MOOCs viennent s'intégrer dans un mouvement particulièrement intéressant et logique d'un point de vue éducatif. Cependant, certains défauts sont évidents d'un point de vue pédagogique. Quels sont les avantages et inconvénients d'une telle innovation technologique? Comment peut-on se servir de la révolution des MOOCs pour améliorer la pédagogie sans détruire notre système actuel? En d'autres termes, comment peut-on utiliser la contribution des MOOCs pour optimiser la formation universitaire?",
          MOOC_ASIDE_FIRST:"Réinventer la pédagogie dans la vague des MOOCs.",
          MOOC_ASIDE_SECOND:"Equipe de 6 étudiants à l'UTC.",
          MOOC_ASIDE_THIRD:"Automne 2013 (4 mois)",
          MOOC_LINK: "<i class='fa fa-hand-o-right'></i> <a target='blank' href='http://www.internetactu.net/2013/02/20/mooc-la-standardisation-ou-linnovation/'>En savoir plus</a> <i class='fa fa-hand-o-left'></i>",
          ARCHI_TITLE:"De l'architecture théâtrale aux spectateurs",
          ARCHI_TITLE_MIN:"Histoire des Techniques",
          ARCHI_GENERAL:"C'est un mémoire que j'ai rédigé dans le cadre d'un cours sur l'histoire des techniques, à l'automne 2012.",
          ARCHI_GOAL:"L'objectif était de montrer que l'architecture théâtrale est un aspect fondamental pour comprendre les interactions entre les sociétés et les arts du spectacle. Comment les deux univers sont-ils connectés? Comment l'agencement théâtral réèle-t-il son rôle social au cours des siècles? J'ai tenté de défendre la thèse selon laquelle l'architecture théâtrale est le résultat de l'évolution des mentalités dans les sociétés et la réponse à des enjeux politiques et économiques.",
          ARCHI_PERSONAL:"Extrait du mémoire : Le sens de l'expression « aller au théâtre » n'a pas toujours été l'action de réserver une place assise dans l'espoir de recevoir quelconque distraction. Faire du théâtre de nos jours, c'est tenir compte des contraintes du bâtiment (rideau, fosse, cadre) pour créer un univers décalé auquel le public, bloc sans classes, a un accès démocratique. Le théâtre s'innove et relance son sens à chaque représentation à l'intérieur de son propre champ. «On ne peut pas demander au théâtre d'être ce que la société n'est pas. On a le théâtre que l'on mérite» (Enzo Cormann). On peut évoquer le terme de Simondon de «transduction» entre ces deux univers. Leur émergence et coévolution parallèles sont le témoin de leur étroite relation.",
          ARCHI_ASIDE_FIRST:"De l'architecture théâtrale aux spectateurs.",
          ARCHI_ASIDE_SECOND:"Histoire des Techniques",
          ARCHI_ASIDE_THIRD:"Automne 2012 (4 months)",
          ARCHI_LINK: "Image: Théâtre antique de Vaison-la-Romaine (Vaucluse, France).",
          THEATRE_TITLE:"Conservatoire de Théâtre",
          THEATRE_TITLE_MIN:"Ermont-Eaubonne (2002 - 2012)",
          THEATRE_GENERAL:"<ol><li>2002 - 2003 : <i>La princesse capricieuse</i> de Patrick Mecucci</li><li>2005 - 2006 : <i>Amadeus Mozart</i></li><li>2006 - 2007 : <i>Les aventures d'Auren, le petit serial killer</i> de Joseph Danan</li><li>2007 - 2008 : <i>Le bourgeois gentilhomme<i> de Molière</li><li>2008 - 2009 : <i>Songe d'une nuit d'été</i> de William Shakespeare</li><li>2009 - 2010 : <i> La Mouette</i> de Chekhov</li><li>2010 - 2011 : <i> L'Open Space m'a tuer</i> d'Alexandre des Isnards et Thomas Zuber</li><li>2011 - 2012 : <i>Guitou</i> de Fabrice Melquiot</li></ol>",
          THEATRE_GOAL:"",
          THEATRE_PERSONAL:"",
          THEATRE_ASIDE_FIRST:"Conservatoire de Théâtre",
          THEATRE_ASIDE_SECOND:"Ermont-Eaubnne",
          THEATRE_ASIDE_THIRD:"2002-2012",
          THEATRE_LINK: "",
          METHOD_TITLE:"Méthodologie de l'Ingénieur Contemporain",
          METHOD_TITLE_MIN:"Analyse de la valeur",
          METHOD_GENERAL:"Ce projet a été réalisé dans le cadre d'un cours sur l'analyse de la valeur à l'UTC, avec 7 autres étudiants, à l'automne 2013.",
          METHOD_GOAL:"L'objectif était d'établir une méthodologie générale de l'ingénieur contemporain. Comment l'ingénieur doit-il agir au sein des organisations contemporaines? Quelles compétences doit-il mobiliser pour mener à bien un projet? Quels outils méthodologiques peut-il utiliser pour répondre à une commande et guider une équipe d'experts dans la recherche de solutions?",
          METHOD_PERSONAL:"L'ingénieur contemporain est un technologue qui réfléchit sur les enjeux et impacts humains des technologies contemporaines. C'est aussi un méthodologue dont l'expertise se définit en termes de questionnements. Ce n'est pas un scientifique qui se contente d'appliquer des savoirs précis mais un acteur de la complexité actuelle. C'est également un manager, un pédagogue qui sait comment mettre un collectif en état d'innovation menant à la réussite de projets.",
          METHOD_ASIDE_FIRST:"Méthodologie de l'Ingénieur Contemporain",
          METHOD_ASIDE_SECOND:"Analyse de la valeur (8 étudiants)",
          METHOD_ASIDE_THIRD:"Automne 2013 (UTC, Compiègne)",
          METHOD_LINK: "",
          CV_PIC:"<a class='cveffect' target='blank' href='pdf/Keunebroek_Quentin_CV.pdf'><img src='images/Keunebroek_Quentin_CV.png'width='400px'/></a>",
          RESUME: 'CV',
  			});
  			$translateProvider.preferredLanguage('en');
	});//angular is the library, store the name of the module and the [] stands for dependencies. 

app.constant('ProjectsTitles', [
    {id: 1, key:'GeoCatch',  title: 'GEO_TITLE', small: 'GEO_TITLE_MIN', general: 'GEO_GENERAL', goal: 'GEO_GOAL', personal: 'GEO_PERSONAL', firstaside: "GEO_ASIDE_FIRST", secondaside: "GEO_ASIDE_SECOND", thirdaside: "GEO_ASIDE_THIRD", linkaside: "GEO_LINK", image: 'images/logo.png'},
    {id: 2, key:'UTComputer',  title: 'UTComputer_TITLE', small: 'UTComputer_TITLE_MIN', general: 'UTComputer_GENERAL', goal: 'UTComputer_GOAL', personal: 'UTComputer_PERSONAL', firstaside: "UTComputer_ASIDE_FIRST", secondaside: "UTComputer_ASIDE_SECOND", thirdaside: "UTComputer_ASIDE_THIRD", linkaside: "UTComputer_LINK", image: 'images/UTComputer.png'},
    //{id: 3, key:'SorbonneONU',  title: 'SorbonneONU_TITLE', small: 'SorbonneONU_TITLE_MIN', general: 'SorbonneONU_GENERAL', goal: 'SorbonneONU_GOAL', personal: 'SorbonneONU_PERSONAL', firstaside: "SorbonneONU_ASIDE_FIRST", secondaside: "SorbonneONU_ASIDE_SECOND", thirdaside: "SorbonneONU_ASIDE_THIRD", linkaside: "SorbonneONU_LINK", image: 'images/SorbonneONU.jpg'},

    {id: 4, key:'Pegass Croix Rouge française',  title: 'CROIX_TITLE', small: 'CROIX_TITLE_MIN', general: 'CROIX_GENERAL', goal: 'CROIX_GOAL', personal: 'CROIX_PERSONAL', firstaside: "CROIX_ASIDE_FIRST", secondaside: "CROIX_ASIDE_SECOND", thirdaside: "CROIX_ASIDE_THIRD", linkaside: "CROIX_LINK", image: 'images/croix-rouge.png'},
    {id: 5, key:'BiPod iOS Health Santé App Start-up française french', title: 'BIO_TITLE', small: 'BIO_TITLE_MIN', general: 'BIO_GENERAL', goal: 'BIO_GOAL', personal: 'BIO_PERSONAL', firstaside: "BIO_ASIDE_FIRST", secondaside: "BIO_ASIDE_SECOND", thirdaside: "BIO_ASIDE_THIRD", image: 'images/health.png'},
    {id: 6, key:'MBTI personality Profil MBTI Expert system Système expert', title: 'MBTI_TITLE', small: 'MBTI_TITLE_MIN', general: 'MBTI_GENERAL', goal: 'MBTI_GOAL', personal: 'MBTI_PERSONAL', firstaside: "MBTI_ASIDE_FIRST", secondaside: "MBTI_ASIDE_SECOND", thirdaside: "MBTI_ASIDE_THIRD", image: 'images/lisp.jpg'},
    {id: 7, key: 'Hutech Humanités et Technologie Humanities and Technology New Bachelor nouveau cursus', title: 'HUTECH_TITLE', small: 'HUTECH_TITLE_MIN', general: 'HUTECH_GENERAL', personal: "HUTECH_PERSONAL", goal: 'HUTECH_GOAL', firstaside: "HUTECH_ASIDE_FIRST", secondaside: "HUTECH_ASIDE_SECOND", thirdaside: "HUTECH_ASIDE_THIRD", linkaside: "HUTECH_LINK", image:'images/hutech.jpg'},
    {id: 8, key: 'ReuniUTC Android App Application Android', title: 'ANDROID_TITLE', small: 'ANDROID_TITLE_MIN',general: 'ANDROID_GENERAL', personal: "ANDROID_PERSONAL", goal: 'ANDROID_GOAL', firstaside: "ANDROID_ASIDE_FIRST", secondaside: "ANDROID_ASIDE_SECOND", thirdaside: "ANDROID_ASIDE_THIRD", linkaside: "", image:'images/android.jpg'},
    {id: 9, key: 'Programming distributed embedded systems Programmation de systèmes distribués et embarqués',title: 'BRAUNSCHWEIG_TITLE', small: 'BRAUNSCHWEIG_TITLE_MIN',general: 'BRAUNSCHWEIG_GENERAL', personal: "BRAUNSCHWEIG_PERSONAL", goal: 'BRAUNSCHWEIG_GOAL', firstaside: "BRAUNSCHWEIG_ASIDE_FIRST", secondaside: "BRAUNSCHWEIG_ASIDE_SECOND", thirdaside: "BRAUNSCHWEIG_ASIDE_THIRD", linkaside: "BRAUNSCHWEIG_LINK", image:'images/projekt.jpg'},
    {id: 10, key: 'From Industrial to Cognitive Capitalism Du capitalisme industriel au capitalisme cognitif PHITECO',title: 'PHITECO_TITLE', small: 'PHITECO_TITLE_MIN',general: 'PHITECO_GENERAL', personal: "PHITECO_PERSONAL", goal: 'PHITECO_GOAL', firstaside: "PHITECO_ASIDE_FIRST", secondaside: "PHITECO_ASIDE_SECOND", thirdaside: "PHITECO_ASIDE_THIRD", linkaside: "PHITECO_LINK", image:'images/capitalisme.jpg'},
    {id: 11, key: 'Contemporary Engineer Methodology Méthodologie Ingénieur Contemporain Analyse de la valeur analyse value analysis Value Analysis',title: 'METHOD_TITLE', small: 'METHOD_TITLE_MIN',general: 'METHOD_GENERAL', personal: "METHOD_PERSONAL", goal: 'METHOD_GOAL', firstaside: "METHOD_ASIDE_FIRST", secondaside: "METHOD_ASIDE_SECOND", thirdaside: "METHOD_ASIDE_THIRD", linkaside: "METHOD_LINK", image:'images/fast.jpg'},
    {id: 12, key: 'Réinventer la pédagogie dans la vague des MOOCs Reinvent pedagogy in the MOOCs vague MOOC',title: 'MOOC_TITLE', small: 'MOOC_TITLE_MIN',general: 'MOOC_GENERAL', personal: "MOOC_PERSONAL", goal: 'MOOC_GOAL', firstaside: "MOOC_ASIDE_FIRST", secondaside: "MOOC_ASIDE_SECOND", thirdaside: "MOOC_ASIDE_THIRD", linkaside: "MOOC_LINK", image:'images/mooc.png'},
    {id: 13, key: 'De architecture théâtrale aux spectateurs Fsrom theatre architecture to spectators History of Technologies Histoire des techniques',title: 'ARCHI_TITLE', small: 'ARCHI_TITLE_MIN',general: 'ARCHI_GENERAL', personal: "ARCHI_PERSONAL", goal: 'ARCHI_GOAL', firstaside: "ARCHI_ASIDE_FIRST", secondaside: "ARCHI_ASIDE_SECOND", thirdaside: "ARCHI_ASIDE_THIRD", linkaside: "ARCHI_LINK", image:'images/theatre.jpg'},
    {id: 14, key: 'Theatre Conservatory Conservatoire de Théâtre', title: 'THEATRE_TITLE', small: 'THEATRE_TITLE_MIN',general: 'THEATRE_GENERAL', personal: "THEATRE_PERSONAL", goal: 'THEATRE_GOAL', firstaside: "THEATRE_ASIDE_FIRST", secondaside: "THEATRE_ASIDE_SECOND", thirdaside: "THEATRE_ASIDE_THIRD", linkaside: "THEATRE_LINK", image:'images/Aventure.jpg'},
]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    templateUrl : "home.htm"
  })
  .when("/projects", {
    templateUrl : "projects.htm"
  })
  .when("/resume", {
    templateUrl : "resume.htm"
  })
  .otherwise({
            redirectTo: '/home'
        });

});

app.run(function ($browser) {
    $browser.baseHref = function () { return "quentinkeunebroek.fr" };
  });


	
	app.controller('TranslateController',function($translate,$scope, ProjectsTitles,$location, $anchorScroll){//defines a controller.
     $scope.currentlanguage= 'en';
		$scope.changeLanguage=function(langKey){
			$translate.use(langKey);
      $scope.currentlanguage = $translate.use();
		};
  $scope.projects = ProjectsTitles;
  $scope.menuItems = ['Home', 'Projects'];
  $scope.activeMenu = $scope.menuItems[0];


  $scope.date= new Date();
   $scope.setActive = function(menuItem) {
    $scope.activeMenu = menuItem
 }
  $scope.scrollTo = function(id) {
     //$('html,body').animate({scrollTop: $("#"+id).offset().top});
     //$location.hash(id);
     $anchorScroll();
  }

	});

})();