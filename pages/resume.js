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
                src="https://wenkaitanresume.s3.us-east-1.amazonaws.com/Tan%2C%20Wenkai%20-%20Resume%20-%20August%202022.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLWVhc3QtMSJHMEUCIFT4L4frEBIZleQuSjg2tc0oVFteZV%2BzFJ5rFl2iSVRvAiEA9u%2Fv9VtjtcKz2QPZkd3Hfk9pquIOMdQBicuxry0nbTMqhAMIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NTk2NTY2NjY3NjMiDAA3DGIZkW313nqm%2FCrYAoztfK1BhNA9OLakcOZtr2%2BlOC4tjFAg%2Bnru6W9TCZoAdeJZPFS341cTCE08K19JLU%2BhlKmgM0%2FXFDPYfvd4Fsn8WzRgtbNJvmsZNJjonvCEEmvsl5GXqv0e6ZPZTXUZ0gS2VvVr%2F1HGtdFnSg65CY7WtoQH1KdM%2BlyzIlM%2BH9zBOSBjwJFTYNdw%2BQOv9uWUP132rF%2BzV8NcZATnGG30SDqyrG9kuVmkYEORRmOaa%2BEsnoknUQ5n9zNkg%2FD70exI%2B3KdN9mBHPlAqqyOMVaOxrnTE3jAvEfbXix8De%2Fqyiuo7hGPTzZMHqMjdADVqLxIKap897%2FPEFj7Ld6fcfSOBcENRbUTLv2gVQW22W%2BH59Nt9dBQKOMvuCsDrkbt7rUkbZd8J4ZSaINGl3ecTfCizl9LUP4zzpSScVeI%2BBOlrnpQig2txtV%2B5HK2K3B2C9xEx8jYiZDH583BMJSE654GOrMC%2FUlLfudFEC5BmKE4YDSS8RBlYlpFHEkQTFcgeBaM1sGt6sXMZB4xOta66DUXWrhkka25bU3Fs7%2Fb%2BfjR7xyg4Zehu1PENqZ%2BttAhY94LE2%2FDJ6b073YP9Z0vxFkvblpPmJRocJY9lhhdsahZQdiEJn%2BSUFrG7OQdUDOYH%2BYvVYMwwVVyRC6YxFOIteS7LdCodzqyMmyUIdAe8TxEScQDUubArS2NLVwceoF4YeiNA7Ax5za31AUxYsq%2BXjlfN6tjSp%2FU5tq9l%2BEtwvcEFpQZ8VyMgxkRh1PeWwtmRr7dyGuGk%2FLgXqkbZv5t4m2JgV1tDOpUh4CRVinrHlgKmqsHp0MWJT7L5mInzH7mHrpDt85I6h9h8yWK%2Fh3ZWgUo3ZAUhW7o1rM8wKyWQwqPNZJnIHV29g%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230201T211911Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYETRDA2F5LMJ4KEB%2F20230201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=44cc7e9f1267d944c684d447fc5bbe530b7572d6b153dc66f227de8f4a149549"
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
