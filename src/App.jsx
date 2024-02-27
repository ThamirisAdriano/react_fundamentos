import { Post } from "./Post";
import { Header } from "./components/header";
import './styles.css'


export function App() {
  return (
    <div>

      <Header></Header>
   <Post
      author="Thamiris Adriano" 
      content="Lorem..."
    />
   <Post
    author="Rafael Adriano" 
    content="Lorem..."/>
   <Post/>
   </div>
  )
  
}



//componentes são funções que retornam html
//jsx javaScript que contém html
//propriedades alteram visualização dos componentes