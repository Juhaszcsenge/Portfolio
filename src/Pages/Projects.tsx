import React from "react"; 



const projects = [{

  id: 1,
  image: "/pszichologus.jpg",
  title: 'Pszichológus Referencia munka',
  github: 'https://github.com/Juhaszcsenge/pszichologus_projekt',
  demo:'https://reactgyakorlas.netlify.app'
},
 {
  id: 2,
  image: "/perfect.webp",
  title: 'Frontend szakdolgozat',
  github: 'https://github.com/Juhaszcsenge/frontend_vizsga',
  demo:'https://mwanawabangona.github.io/js-capstone/'
  }, 
 {
  id: 3,
  image: "/psychology.webp",
  title: 'Covid Data-Single page application-React-Redux',
  github: 'https://github.com/Somdotta07/react-redux-capstone',
   demo: 'https://determined-aryabhata-b6bc71.netlify.app/'
  },
 {
  id: 4,
  image: "/psychology.webp",
  title: 'Recipe App- Built with Ruby & Ruby On Rails-Group project',
  github: 'https://github.com/Somdotta07/recipe-blog-1',
  demo:'https://gentle-hollows-44027.herokuapp.com/users/sign_in'
  },
 {
  id: 5,
  image: "/psychology.webp",
  title: 'Space Travelers Hub- React-Redux Group project',
  github: 'https://github.com/Somdotta07/space-travelers-hub',
  demo:'https://cranky-cray-0feacf.netlify.app/'
  },
 {
  id: 6,
  image: "/psychology.webp",
  title: 'Awesome Books - displays, add books',
  github: 'https://github.com/Somdotta07/Awesome_Books',
  demo:'https://somdotta07.github.io/Awesome_Books/'
},
]

const Projects = () => {
    return (
      <section id="Project" style={{margin: "10px"}}>
        <div className="container project_container" style={{borderColor: " #e055d9", color: "white"}}>
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
        <hr className="separator" 
       style={{
        width: "50%",
        margin: "140px auto",
        border: "none",
        borderTop: "4px solid",
        padding: "10px 0",
        color: "#e055d9",
        opacity: "1",
      }} />
      </section>
      
    );
  };
  
  export default Projects;