import styles from '../styles/Home.module.css'
export default function Footer() {
  return (
    <div>
        <br/><br/><br/><br/>
        <div class="container" className={styles.footer}>
            <div class="row">
            <div class="col-sm-12 col-md-4">
                <h4>Wenkai Tan - </h4>
                <p>Software Engineer</p>
            </div>
            <div class="col-sm-12 col-md-4">
                <h4>Contact  - </h4>
                <p>wenkaitan1019@gmail.com</p>
            </div>
            <div class="col-sm-12 col-md-4" > 
                <h4>Social - </h4>
                <span className={styles.socialFlex}>
                    <a href="https://www.linkedin.com/in/wenkaitan/">Linkedin</a>,
                    <a href="https://www.instagram.com/wenkai_tan10/">Instagram</a>,
                    <a href="https://github.com/WENKAITAN">Github</a>,
                </span>
            </div>
        </div>
    </div>
    </div>

  )
}
