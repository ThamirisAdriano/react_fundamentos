import { Post } from "./Post";
import { Header } from "./components/Header"; 
import './global.css'


export function App() {
  return (
    <div>

      <Header></Header>
   <Post
      author="Thamiris Adriano" 
      content="Lorem..."
    />
   <Post
    author="Rafael Oliveira" 
    content="Lorem..."/>
   <Post/>
   </div>
  )
  
}



//componentes são funções que retornam html
//jsx javaScript que contém html
//propriedades alteram visualização dos componentes