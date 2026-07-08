interface KartProps {
    baslik: string;
    fiyat: number;
    aciklama?: string;
}

function Kart ({basklik,fiyat,aciklama}: KartProps) {
    return(
        <div>
            <h2>{basklik}</h2>
            <p></p>
            
        </div>
    )

}

export default Kart;