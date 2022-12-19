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
                src="https://wenkai-demo-s3.s3.us-east-1.amazonaws.com/Tan%2C%20Wenkai%20-%20Resume%20-%20August%202022.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLWVhc3QtMSJHMEUCIQCB6zVGXeUKr%2FDwaJPZuMSrfp9APTU1I2JYOqqTQ78nNgIgKJ%2BnY2raf2imkD3Q5YRnY6Krgmpip%2B5EofWVYYiqLLEq%2BwIIYhAAGgw1NTk2NTY2NjY3NjMiDDoFigL5yMcfzD3wmCrYArQBrLPv1RNL3rdHvW5zoKWYKPRpYSBNa%2FQF1Q1NnRVKxYS5mpmRtgsZnMa%2BP6l1cVEGWodpmOzUTyRp7Qxo6BBZ2a3S2%2BEtp4jbSHX1oBr2x3HMUOlzwIIUjcyKt6Iw%2BZFVFqN7VMUZEjxMhOg%2BpdAqLJOfaorKsU3eKreY13cr%2FiJcbvHA8ATa%2Fh3Yxd0E3NZE%2FdiuRNitjXutUiMbJQJ4t2Cy%2FSwnUzCcvZAEakYRixkyXtM%2FDmHDJNput52jykg3fKQFuZ%2BENKEvWkXdEvLem3QHqpKSyNnuhKRiSBRJohsApUA8wAcXy%2BCyzVieY0SbqJXH1bAMbVVEDrPwylVj%2F32nV96Nu3Ubi5WSO%2FRB%2F7VEkuqyihXRBzzm0mIbGcNVownp0xMLBrAiu9L0C2GsurBSx0p0IgvJKjtuBpPcB70eeiu11BnGXvpcSlVYiH5ubY9RIDBnMOWpgp0GOrMCUGwIGxbNoCN3tK9WLmd7a%2FFsnbFgOsEymxa%2FpNqa7K8NyHVYJAYUp29ngVrI06x4yr6ZjsPNms%2BwgxKZWSnrbKrRpt4W9q2QP80cZbWQxJ8EhJz6PEs1jRIww6lOMU%2B4e1oYtOpE9%2B5KiSkRnefwZeZ5L%2BVpUBvMZcGLZPpTNL2qJXK7IflJJYnCVu8paOxXn4QcF1Kpva%2F3aAU9pme6aZpTOosBiD6%2FloeipRFXxzDD%2BiLei2UTXPkoM0T0Ru0ov3oZI20yWc1Y28KUM1Z7YEmY5IFbPD%2F7csvdP9Zm%2FY8jRInD%2BWJugueMHPoZ0hDKqDz9t3Pjk9oToLjQDcN2UWaueUAP8ElKsBQutb5lDLYPbqP5dyO%2B8CyiflVY5JJDlBhbpDwtXlGSDF%2FqeSsO7qG4GA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221219T170906Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYETRDA2FTAPY7VX3%2F20221219%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8078daebdee69ff07950998ebfde45efa0cee088d378c80a71679e4c58ab73a"
                width="80%" height="1200" frameborder="0" marginheight="0" marginwidth="0"
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
