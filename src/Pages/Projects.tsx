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
  title: 'Travel',
  github: 'https://github.com/Somdotta07/react-redux-capstone',
   demo: 'https://determined-aryabhata-b6bc71.netlify.app/'
  },
 {
  id: 4,
  image: "/Chat Bot (3).png",
  title: 'Smart Home',
  github: 'https://github.com/Juhaszcsenge/Okos-otthon',
  demo:'https://master--fastidious-salmiakki-b6c8d3.netlify.app/?fbclid=IwAR2hB5eNH30ltu9xUs14cf7n1EmbnmMbsUEVf3-9BPtWHrxwSzQkzfG-XGE'
  },
 {
  id: 5,
  image: "/cloud-bg.png",
  title: 'Data secura',
  github: 'https://github.com/Juhaszcsenge/data-secure-app',
  demo:'https://master--monumental-monstera-3fae2a.netlify.app/?fbclid=IwAR032jIZeDsNt73iyW0QnZWjozdaHjdXjupow1C4dHm6rAw-5wxkW86QYk4'
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
            <div className="project_item-image" style={{borderColor: " #e055d9", width: "400px", height: "200px"}}>
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