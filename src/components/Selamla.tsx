interface KartProps {
    baslik: string;
    fiyat: number;
    aciklama?: string;
}

function Kart ({baslik,fiyat,aciklama}: KartProps) {
    return(
        <div>
            <h2>{baslik}</h2>
            <p></p>
            
        </div>
    )

}

export default Kart;