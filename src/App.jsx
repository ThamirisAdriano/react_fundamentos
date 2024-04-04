import { Post } from "./components/Post";
import { Header } from "./components/Header"; 
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
      <Sidebar></Sidebar>
        <main>
        <Post
            author="Thamiris Adriano" 
            content="Lorem..."
          />
        <Post
          author="Rafael Oliveira" 
          content="Lorem..."/>
        <Post/>
       
        </main>
      </div>
  
   </div>
  )
  
}



//componentes são funções que retornam html
//jsx javaScript que contém html
//propriedades alteram visualização dos componentes