const ProjectsDetails = [
  {
    Project1: [
      {
        Name: "Game Caro",
        ImageProject: "/src/assets/images/project/project1/Main.png",
        Overview: [
          {
            Role: "Developer",
            Type: "independent",
            Language: "Java",
            Technology: "Java Swing",
          },
        ],

        Description: [
          {
            Goal: `
                        The goal of this project is to create an intelligent bot 
                        in basic caro game with Alpha-Beta pruning algorithm and Heuristic 
                        to read each move of player, make the right move to block every move of player and win this game.`,
            Feature: [
              {
                NameFeature: "Algorithms for maps",
                DescriptionFeature: `
                                Designing and developing Algorithms for maps are the most difficult tasks in this 
                                project. I have to search through lots of documents to get more ideas for 
                                creating a bot on a 9x9 map and larger. For a 3x3 map, simply setting 
                                the Alpha-Beta pruning algorithm is sufficient for the bot to solve it. 
                                However, on a 9x9 map, it is too wide for the Alpha-Beta pruning algorithm alone, 
                                so we need to combine it with another algorithm. Fortunately, I found the 
                                Heuristic algorithm, which can be combined with the Alpha-Beta pruning algorithm 
                                to solve this problem.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project1/Feature1/Feature1.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project1/Feature1/Feature1.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project1/Feature1/Feature1.3.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project1/Feature1/Feature1.4.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Level & turn",
                DescriptionFeature: `
                                Because I started developing with the hard level first, 
                                creating the easy level was simple. I just made the bot less intelligent 
                                by degrading the algorithm so it couldn't think as effectively. Similarly, I started 
                                developing with the first turn being the player's turn, so I just changed it 
                                to the bot's turn.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project1/Feature2/Feature2.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project1/Feature2/Feature2.2.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "AIvsAI mode",
                DescriptionFeature: `
                                This is the foundation for project development, so I will just 
                                reuse it to create that mode. It will be Bot vs Bot, turn by turn, for 
                                the player to watch and learn how the bot calculates and moves.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project1/Feature3/Feature3.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Score",
                DescriptionFeature: `It has a score. Players can earn points by winning this game.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project1/Feature4/Feature4.png",
                    Alt: "maps selection display",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    Project2: [
      {
        Name: "Website booking tours and hotels",
        ImageProject: "/src/assets/images/project/project2/Main.png",
        Overview: [
          {
            Role: "Developer",
            Type: "Team",
            Language: "C#, CSHTML, SCSS, JavaScript",
            Technology: "MVC, SQL Server",
          },
        ],

        Description: [
          {
            Goal: `
                        It is a project that connects users with hotels or tours. It not only 
                        supports users in referencing and booking hotels or tours online, but also 
                        assists hotel managers and tour managers in posting about their hotel or tour.`,
            Feature: [
              {
                NameFeature: "User authorization",
                DescriptionFeature: `
                                Because this is an online exchange website between users and service providers, 
                                decentralizing permissions between user types is the first thing we should do to 
                                clarify what users should and shouldn't have access to. To do that, we made two 
                                interfaces: one for users and one for service providers. The admin will decide which 
                                services the provider's account can access through the user authorization function.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project2/Feature1/Feature1.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature1/Feature1.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature1/Feature1.3.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature1/Feature1.4.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Login and register",
                DescriptionFeature: `
                                it's a basic feature any website should have, so i think we won't talk about it anymore.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project2/Feature2/Feature2.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature2/Feature2.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature2/Feature2.3.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Booking and posting",
                DescriptionFeature: `
                                This is a primary feature for users. When you book, your information and booking 
                                details are sent to the server system. Service providers access the service providers's 
                                interface, retrieve that information, and respond to you. If you don't have a user account, 
                                you can see hotels and tours, along with their descriptions and prices, but you can't book.
                                Likewise, posting is a primary feature for service providers. When you post, information about 
                                your hotels or tours is sent to the server system and displayed on the user interface. If you 
                                don't have a service provider account, you can't access the service provider's interface.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.3.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.4.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.5.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature3/Feature3.6.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Promotion",
                DescriptionFeature: `
                                In providing services, promotion is an essential element for attracting consumers.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project2/Feature4/Feature4.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature4/Feature4.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project2/Feature4/Feature4.3.png",
                    Alt: "maps selection display",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    Project3: [
      {
        Name: "Website manage the production diary",
        ImageProject: "/src/assets/images/project/project3/Main.png",
        Overview: [
          {
            Role: "Developer",
            Type: "Team",
            Language: "Java, TypeScript, HTML, SCSS",
            Technology: "Microservices, Postman, PostgreSQL, Docker, MVVC",
          },
        ],

        Description: [
          {
            Goal: `
                        Building a process management system for the agricultural and aquaculture production sector, based 
                        on a microservices architecture. Additionally, the intuitive web interface is user-friendly, 
                        effectively supporting process and log management of farmers.`,
            Feature: [
              {
                NameFeature: "Login",
                DescriptionFeature: `
                                A special feature of this website is that it doesn't have a registration option. Because 
                                this is a realistic project dedicated to farmers, accounts can't be registered by users and 
                                are only provided by the system manager.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project3/Feature1/Feature1.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Handle the production process",
                DescriptionFeature: `
                                After logging in, you can see details of production processes that have been created. You 
                                can edit or update tasks within them, similar to how you make plans to do something. Of course, 
                                you can also create new production processes and handle them like the existing ones.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project3/Feature2/Feature2.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project3/Feature2/Feature2.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project3/Feature2/Feature2.3.png",
                    Alt: "maps selection display",
                  },
                ],
              },
              {
                NameFeature: "Handle the Notebook",
                DescriptionFeature: `
                                Unlike the production process, Notebook like a diary to record the work done over a period 
                                of time and the work related to it. It clearly shows the connection between tasks, recording 
                                the process and results more clearly than planning within the production process.`,
                ImageFeature: [
                  {
                    Src: "/src/assets/images/project/project3/Feature3/Feature3.1.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project3/Feature3/Feature3.2.png",
                    Alt: "maps selection display",
                  },
                  {
                    Src: "/src/assets/images/project/project3/Feature3/Feature3.3.png",
                    Alt: "maps selection display",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const ProjectPreviewDetails = [
  {
    ImageProject: "/src/assets/images/project/project1/Preview.png",
    Name: "Game Caro",
    Href: "/projects/project1",
  },
  {
    ImageProject: "/src/assets/images/project/project2/Preview.png",
    Name: "Website booking tours and hotels",
    Href: "/projects/project2",
  },
  {
    ImageProject: "/src/assets/images/project/project3/Preview.png",
    Name: "Website manage the production diary",
    Href: "/projects/project3",
  },
  {
    ImageProject: "/src/assets/images/project/project3/Preview.png",
    Name: "Website manage the production diary",
    Href: "/projects/project3",
  },
];

export { ProjectsDetails, ProjectPreviewDetails };
