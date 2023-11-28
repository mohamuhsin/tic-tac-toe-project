import Player from "./components/Player"
function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName = 'player-1' symbol ='x'/>
        <Player initialName = 'player-2' symbol ='x'/>

      </ol>
    </div>
   </main>
  )
}

export default App
