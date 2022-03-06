import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import resume from '../public/resume.png'
function Resume() {
    return <Image
            className={styles.center}
            src={resume}
            alt="resume for wenkai tan"
            placeholder="blur" // Optional blur-up while loading
            />
  }
  
export default Resume

Resume.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
