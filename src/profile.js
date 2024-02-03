import styles from './profile.module.css';
import Obala2 from './obala2.jpg';
function profile (){
    return (
        <div className={styles.container}>
            <img src={Obala2} alt="" style={{width: '180px', height: '180px'}} />
            <div className="text">
                <h3>Profile Brief</h3>
                <hr />
                <p>
                    Introducing Absalom, a proficient and dynamic web developer with a mastery of HTML, CSS, JavaScript, and React. With a keen eye for design and an innate understanding of front-end development, Absalom brings creativity and technical expertise to the world of web development. Their ability to seamlessly blend aesthetics with functionality sets them apart, making them a valuable asset for any project. Whether crafting responsive and visually appealing user interfaces or implementing complex features using React, Absalom consistently delivers high-quality solutions. With a passion for staying abreast of the latest industry trends and a commitment to excellence, Absalom is well-equipped to tackle diverse challenges in the ever-evolving landscape of web development.
                </p>
                <a href="tell:0748921685">Call</a>
            </div>
        </div>
    );
}
export default profile;