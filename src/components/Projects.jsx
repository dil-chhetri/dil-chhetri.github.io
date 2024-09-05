import PropTypes from 'prop-types';

const getColorClass = (index) => {
    const pairIndex = Math.floor(index / 2);
    return pairIndex % 2 === 0 ? 'text-blue-500' : 'text-pink-500';
};

const Project = ({ project: [url, name, abbreviation] }) => {
    return (
        <a href={url} className='project-link inline'>
            <abbr className='abbr no-underline' title={name}>{abbreviation}</abbr>
        </a>
    );
};

const ProjectObj = ({ project: [tech, projects] }) => (
    <div className='mt-5 project-div '>
        <h2 className='text-white inline ml-2'>
            <pre className='inline'>
            <span>
            <span className={getColorClass(0)}>{'{ '}</span>
                 {tech}:{''}
                {projects.map((project, index) => (
                    <span key={index}>
                    <Project project={project} />
                    {index < projects.length - 1 && ', '}
                    </span>
                ))} <span className={getColorClass(1)}>{'}'}</span>
                {','}
            </span>
            </pre>
        </h2>
    </div>
);

const Projects = ({ projects }) => {
    return (
        <div className='projects ml-5 absolute top-0 text-white inline'>
           <h1 className='ml-5 mt-3'>Projects :</h1>
           {projects.map((project, index) => (
                <ProjectObj project={project} key={index} />
            ))} 
           
        </div>
    );
};


Project.propTypes = {
    project: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ProjectObj.propTypes = {
    project: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
    ])).isRequired,
};

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]))).isRequired,
};

export default Projects;
