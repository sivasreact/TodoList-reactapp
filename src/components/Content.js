import Additem from "./Additem";
import Search from "./Search";

const Content = ({items, handleCheck, handleDelete,newItem,setNewItem,handleSubmit, search, setSearch}) => {
  return (
    <div className='content'>
            <section className="section-items">
              <Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
              {(items.length >0) ? (
                  <ul>
                      {items.map((item) => (
                        <li key={item.id}>
                          <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}/>
                          <label style={item.checked ? {textDecoration:"line-through"} : null}>{item.item}</label>
                          <button onClick={() => handleDelete(item.id)} id="del">Del</button>
                        </li> 
                      ))}
                  </ul>
                  ) : (<p>List is empty</p>) }
            </section>
    </div>
  )
}

export default Content;
