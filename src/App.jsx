import {Post} from './Post';
import {Header} from './components/Header'
import './global.css';
export function App() {

  return (
    <div>

    <Header />

    <Post 
    author="Willian Teodoro" 
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus amet voluptas sequi porro?" 
    />
    <Post 
    author="Cabrito Tevez"
    content="Um novo content"
    />
    </div>

  )
}
