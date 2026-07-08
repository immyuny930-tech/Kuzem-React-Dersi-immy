import Kart from "./components/Selamla"

function App() {
  return(
    <div>
      <Kart basklik = "Kalem" fiyat ={5} aciklama = "Bu bir kalem." />
      <Kart basklik = "Klavye" fiyat ={500} aciklama = "Bu bir kalem."/>
      <Kart basklik = "Monitor" fiyat ={500} aciklama = "Bu bir kalem."/>
      <Kart basklik = "Vilgisayar" fiyat ={500} aciklama = "Bu bir kalem."/>
    </div>
  )
}
export default App;