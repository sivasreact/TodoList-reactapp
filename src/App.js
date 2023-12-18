import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './index.css'
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  function addItem(item){
      const id  = items.length ? items[items.length -1].id +1 : 1; 
      const addNewItem = {id, checked:false, item};
      const listItems = [...items,addNewItem]
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleCheck(id){
      const listItems = items.map((item) => item.id === id ? {...item, checked :!item.checked} : item);
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify(listItems));
  }
  function handleDelete(id){
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify(listItems));
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem("")
  }
  return (
   <>
    <Header />
    <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} 
    newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
    <Footer length={items.length}/>
   </>
  )
}

export default App;
