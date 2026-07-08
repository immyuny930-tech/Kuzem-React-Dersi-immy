import Kart from "./components/Selamla"

function App() {
  return(
    <div>
      <Kart basklik = "Kalem" fiyat ={5} aciklama = "Bu bir kalem." />
      <Kart basklik = "Klavye" fiyat ={500} />
    </div>
  )
}
export default App;