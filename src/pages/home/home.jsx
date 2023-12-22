import DivCenter from "./components-home/divCenter";
import DivLeft from "./components-home/divLeft";
import Footer from "./footer";
import Header from "./header";
import './style.css';

function Home(){
  return(
    <>
      <Header />
      <main className="main-home">
      <DivLeft />
      <DivCenter />
      </main>
      <Footer />
    </>
  )
}
export default Home;