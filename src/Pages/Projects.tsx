import React from "react"; 



const projects = [{

  id: 1,
  image: "/psychology.webp",
  title: 'Somarven full-stack project - Group project',
  github: 'https://github.com/Juhaszcsenge/frontend_vizsga',
  demo:'https://somarven.netlify.app/'
},
 {
  id: 2,
  image: "/psychology.webp",
  title: 'Breaking Bad Plain JavaScript group-project',
  github: 'https://github.com/Somdotta07/js-capstone',
  demo:'https://mwanawabangona.github.io/js-capstone/'
  }, 
 {
  id: 3,
  image: "/psychology.webp",
  title: 'Covid Data-Single page application-React-Redux',
  github: 'https://github.com/Somdotta07/react-redux-capstone',
   demo: 'https://determined-aryabhata-b6bc71.netlify.app/'
  },
//  {
//   id: 4,
//   image: IMG4,
//   title: 'Recipe App- Built with Ruby & Ruby On Rails-Group project',
//   github: 'https://github.com/Somdotta07/recipe-blog-1',
//   demo:'https://gentle-hollows-44027.herokuapp.com/users/sign_in'
//   },
//  {
//   id: 5,
//   image: IMG5,
//   title: 'Space Travelers Hub- React-Redux Group project',
//   github: 'https://github.com/Somdotta07/space-travelers-hub',
//   demo:'https://cranky-cray-0feacf.netlify.app/'
//   },
//  {
//   id: 6,
//   image: IMG6,
//   title: 'Awesome Books - displays, add books',
//   github: 'https://github.com/Somdotta07/Awesome_Books',
//   demo:'https://somdotta07.github.io/Awesome_Books/'
// },
]

const Projects = () => {
    return (
      <section id="project" style={{margin: "10px"}}>
        <div className="container project_container" style={{borderColor: " #e055d9"}}>
          {projects.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project_item" style={{borderColor: " #e055d9"}}>
            <div className="project_item-image" style={{borderColor: " #e055d9"}}>
            <img src={image} alt={title} />
            </div>
                <h3>{title}</h3>
            <div className="project-item-cta">
                       <a
              href={github}
              className="btn"
            >
              Github
            </a>
            <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
              Live Demo
            </a>
            </div> 
          </article>
            )
          })}               
        </div>
      </section>
    );
  };
  
  export default Projects;