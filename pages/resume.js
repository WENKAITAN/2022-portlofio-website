import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


function Resume() {

    return (
      <div className="container" >
        <div className="row">
          <div className="col-md-12 offset-md-1 col-12 offset-1">
            <iframe 
                className="five"
                src="https://wenkai-demo-s3.s3.amazonaws.com/Tan%2C+Wenkai+-+Resume+-+August+2022.pdf"
                width="80%" height="1200" frameBorder="0" marginheight="0" marginwidth="0"
                >
            </iframe>
          </div>
        </div>
      </div>

    )

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
