import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import logo from '../public/logo.png'
import fyyur from '../public/fyyur.png'
import twitter from '../public/twitter.png'
import myReads from '../public/myReads.png'
import wouldYouRather from '../public/wouldYouRather.png'
import Image from 'next/image'
export default function Index() {
  return (
    <div>
      <br/><br/>
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 className={styles.header}>
            Wenkai is a software developer <br/>living in <span className={styles.china}>China</span> New York City
            </h2>
          </div>
        </div>
      </div>

      <br/><br/><br/>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.full}>
              <a href="https://get-it-ecommerce.netlify.app/">
                <Image
                className={styles.img}
                src={logo}
                alt="get it store logo"
                width={1400} automatically provided
                height={500} automatically provided
                placeholder="blur" // Optional blur-up while loading
                />
              </a>


            </div>
            <h3 className={styles.landingH3}>Get It - A Clothing Ecommerce Website</h3>
            <h4 className={styles.landingH4}>Team Tead</h4>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <a href="https://fyyurtan.herokuapp.com/">
              <Image
                className={styles.img}
                src={fyyur}
                alt="fyyur"
                width={700} automatically provided
                height={700} automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </a>

            <h3 className={styles.landingH3}>Fyyur - A Musical Venue and Artist Booking Site</h3>
            <h4 className={styles.landingH4}>Backend Developer</h4>
          </div>
          <div class="col-md-6 col-sm-12">
            <a href="https://reactnd-project-would-you-rather-starter-three.vercel.app/login">
              <Image
                className={styles.img}
                src={wouldYouRather}
                alt="wouldYouRather"
                width={700} automatically provided
                height={700} automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </a>

            <h3 className={styles.landingH3}>Would You Rather React App - A Simple Web Game</h3>
            <h4 className={styles.landingH4}>Frontend Developer</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <a href="https://udacity-my-reads.vercel.app/">
              <Image
                className={styles.img}
                src={myReads}
                alt="myReads"
                width={700} automatically provided
                height={700} automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </a>

            <h3 className={styles.landingH3}>My Reads </h3>
            <h4 className={styles.landingH4}>Frontend Developer</h4>
          </div>
          <div class="col-md-6 col-sm-12" className={styles.grow}>
            <a href="https://tweeter-clone.vercel.app/">
              <Image
                className={styles.img}
                src={twitter}
                alt="twitter"
                width={700} automatically provided
                height={700} automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </a>

            <h3 className={styles.landingH3}>Twitter Clone React App</h3>
            <h4 className={styles.landingH4}>Frontend Developer</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}

