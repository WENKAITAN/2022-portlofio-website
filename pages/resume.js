import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'


function Resume() {

    return (
      <div class="container" >
        <div class="row">
          <div class="col-md-12 offset-md-1 col-sm-12 offset-sm-1">
            <iframe 
                className="five"
                src="https://docs.google.com/document/d/e/2PACX-1vTYsGAZezMwGg75zSZueFHpqVAAAuzL2YXPxHJ5pNwhKRPXLd0rfpVJBJtM_yM6mA/pub?embedded=true"
                width="80%" height="1000" frameborder="0" marginheight="0" marginwidth="0"
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
