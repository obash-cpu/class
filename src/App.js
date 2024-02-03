
import styles from './App.module.css';
import Html from './html.jpg';
import Css from './css.jpg';
import ReactImage from './react.jpg';
import Javascript1 from './javascript1.jpg';

function App() {
  return (
        <div className={styles.container1}>
            <div className={styles.html}>
                <img src={Html} alt="" style={{width: '140px', height:'150px'}}/>
                <h3>HTML The wire frame</h3>
                <h4>Symply the best</h4>
                <hr />
                <p>
                    <strong>Absalom's</strong> expertise in HTML represents a fundamental cornerstone of their proficiency as a web developer. 
                    With a deep understanding of HyperText Markup Language, 
                    <strong>Absalom</strong> excels in crafting well-structured and semantically rich web pages. 
                    Their mastery of HTML enables them to create seamless user experiences by organizing content effectively, 
                    defining clear document structures, and implementing responsive design principles. 
                    Absalom's attention to detail in utilizing HTML tags, attributes, and the latest HTML standards, such as HTML5, showcases their commitment to staying current with industry best practices. 
                    Whether developing a sleek landing page or a complex web application, 
                    Absalom's solid foundation in HTML ensures that the projects they undertake are not only visually appealing but also maintain accessibility and user-friendly navigation.
                </p>
            </div>
            <div className={styles.css}>
                <img src={Css} alt="" style={{width: '140px', height: '150px'}} />
                <h3>Css Technitian</h3>
                <p>When it comes to CSS, Absalom demonstrates a keen eye for design and a knack for transforming static web pages into visually captivating experiences. Proficient in both CSS2 and CSS3, Absalom skillfully applies styles, layouts, and animations to achieve aesthetically pleasing and user-friendly interfaces. Their understanding of responsive design ensures that websites adapt seamlessly to different screen sizes, providing a consistent and engaging experience across devices. Whether it's creating a modern and sleek appearance or maintaining brand consistency, Absalom's expertise in CSS contributes significantly to the overall polish and professionalism of their projects.</p>
            </div>
            <div className={styles.react}>
                <img src={ReactImage} alt="" style={{width: '140px', height: '150px'}} />
                <h3>React, My Strength</h3>
                <p>In the realm of React, Absalom showcases an advanced proficiency in building powerful and scalable front-end applications. With a deep understanding of React's component-based architecture, state management, and virtual DOM, Absalom efficiently develops reusable and modular UI elements. His ability to create interactive and dynamic user interfaces using React's declarative syntax highlights their commitment to efficient and maintainable code. Whether tackling complex state management challenges or implementing smooth client-side routing, Absalom's expertise in React positions them as a valuable asset in the development of modern and high-performance web applications.</p>
            </div>
            <div className={styles.java}>
                <img src={Javascript1} alt="" style={{width: '130px', height: '150px'}} />
                <h3>Javascript My interaction point</h3>
                <h4>the bonquette</h4>
                <hr />
                <p>When it comes to CSS, Absalom demonstrates a keen eye for design and a knack for transforming static web pages into visually captivating experiences. Proficient in both CSS2 and CSS3, Absalom skillfully applies styles, layouts, and animations to achieve aesthetically pleasing and user-friendly interfaces. His understanding of responsive design ensures that websites adapt seamlessly to different screen sizes, providing a consistent and engaging experience across devices. Whether it's creating a modern and sleek appearance or maintaining brand consistency, Absalom's expertise in CSS contributes significantly to the overall polish and professionalism of their projects.</p>
            </div>
        </div>
      
    );
}

export default App;
