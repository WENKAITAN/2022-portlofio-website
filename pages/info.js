import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myPic from '../public/myPic.JPG'
import myPic2 from '../public/myPic2.JPG'
function Info() {
    return (
      <div className={styles.bio}>
        <br/><br/>
        <div class="container">
          <div class="row">
            <div class="col">
                <Image
                  className={styles.img}
                  src={myPic2}
                  alt="personal image"
                  />
            </div>
            <div class="col">
              <p>
              Hello! My name is Wenkai Tan and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try to build a webiste for myself!
Fast-forward to today, and I have become a senior computer science student at Lehman College based in NYC with focus on full-stack development. My main focus these days is building accessible, inclusive products and digital experiences.
I will be interning at American express this summer as a software enginner. 
Here are a few technologies I’ve been working with recently:
              </p>

              <ul className={styles.technologies}>
                <div>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Express.js</li>
                </div>
                <div className={styles.stack}>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>PostgreSQL</li>
                  <li>Bootstrap</li>
                </div>
              </ul>
              
            </div>
          </div>
        </div>
      </div>

    )
  }
  
export default Info

Info.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
