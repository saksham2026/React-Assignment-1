import './App.css'
import Button from './components/Button'
import Header from './components/Header';
import List from './components/List';
import Name from './components/Name'
function handleClick(){
  console.log('I am Clicked.');
}
function App() {
  return(
    <>
    <Name age='22' name='Adam Smith' />
    <Button text='Click Me' onClick = {handleClick} />
    <Header head='This is a header prop.' />
    <List items = {['Saksham','Samarth','Adarsh']} />
    </>
  )
}
export default App
