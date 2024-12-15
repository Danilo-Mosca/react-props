// Importo i CSS Modules delle Card
import style from "./card.module.css";

/* Funzione che crea le Cards */
function Card({
    id,
    title,
    image = "https://picsum.photos/640/480",
    content,
    tags }) {
    return (
        <div className={`${style.cards} card col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3`}>


            {/* Operatore ternario che verifica la presenza dell'immagine e nel caso non fosse presente le assegna un'immagine casuale 600x400px dal sito https://picsum.photos/*/}
            {image === "" ?
                <img src={"https://picsum.photos/640/480"} className={`card-img-top ${style["img-custom"]}`} alt={title} />
                : <img src={`${image}`} className={`card-img-top ${style["img-custom"]}`} alt={title} />}


            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <p className="card-text">

                    {/* Mappo l'array dei tag per assegnargli la classe CSS di colore giusto (attraverso la funzione tagsColor) in base al valore contenuto nella stringa (html, css, js, php) */}
                    {tags.map((element) => {
                        return <span key={element} className={`${tagsColor(element)}`}>{element}</span>
                    })}

                </p>
                <a href="#" className={`btn btn-primary ${style.btncustom}`}>Leggi di più</a>
            </div>
        </div>
    );
}

// Funzione che restituisce la classe CSS giusta per ogni tag
function tagsColor(tags) {
    let classe = "";
    switch (tags) {
        case "html":
            classe = style.colorHtml;
            break;
        case "css":
            classe = style.colorCss;
            break;
        case "js":
            classe = style.colorJs;
            break;
        case "php":
            classe = style.colorPhp;
            break;
    }
    return classe;
}

export default Card;