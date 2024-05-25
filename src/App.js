import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Switch, Route, routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Mer_mercedes from "./components/Mer_mercedes/Mer_mercedes";
import Maybach from "./components/Maybach/Maybach";
import Om_oss from "./components/Om_oss/Om_oss";
import Veien_videre from "./components/Veien_videre/Veien_videre";
import Våre_modeller_lg_screen from "./components/Våre_modeller/Våre_modeller_lg_screen";
import Våre_modeller_sm_screen from "./components/Våre_modeller/Våre_modeller_sm_screen";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Header />
          <Våre_modeller_lg_screen />
          <Våre_modeller_sm_screen />
          <Mer_mercedes />
          <Maybach />
          <Veien_videre />
          <Om_oss />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}









export default App;
