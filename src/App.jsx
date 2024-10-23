
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./components/articles/Listarticles"
import  Insertarticle from "./components/articles/Insertarticle"
import Editarticle from "./components/articles/Editarticle"
import Viewarticles from "./components/articles/Viewarticles"
import Listcategories from "./components/categories/Listcategories"
import Insertcategories from "./components/categories/Insertcatergories"
import Editcategories from "./components/categories/Editcategories"
import Viewcategorie from "./components/categories/Viewcategorie"
import Listscategories from "./components/scategories/Listscategories"
import Insertscategories from "./components/scategories/Insertscategories"
import Editscategories from "./components/scategories/Editscategories"
import ViewsCategories from "./components/scategories/ViewsCategories"
import Menu from "./components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
   
    
    <Router>
    <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>} />
        <Route path="/articles/add" element={<Insertarticle/>} />
        <Route path="/articles/edit/:id" element={<Editarticle/>} />
        <Route path="/articles/view/:id" element={<Viewarticles/>} />

        <Route path="/Categories" element={<Listcategories/>} />
        <Route path="/Categories/add" element={<Insertcategories/>} />
        <Route path="/Categories/edit/:id" element={<Editcategories/>} />
        <Route path="/Categories/view/:id" element={<Viewcategorie/>} />

        <Route path="/sCategories" element={<Listscategories/>} />
        <Route path="/sCategories/add" element={<Insertscategories/>} />
        <Route path="/sCategories/edit/:id" element={<Editscategories/>} />
        <Route path="/sCategories/view/:id" element={<ViewsCategories/>} />
        

      </Routes>
    </Router>
      <h1>hELOOOOOOOOOOOOOOOOOOO</h1>
    </>
  )
}

export default App
