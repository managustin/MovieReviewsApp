import './App.css'

function App() {
  return (
    /* el <> se llama fragmento y es para poder poner más de un elemento en el componente,
    lo cual no se puede hacer*/
    <> 
      <div>
      <p>Exploring components' concepts and how they're implemented.</p>
      </div>
      <Text display='Hello World'/>
      <Text display="This is the same <Text> component using a different prop."/>
    </>
  )
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
