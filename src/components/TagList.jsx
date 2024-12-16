// Importo l'oggetto posts
import posts from '../data/posts';
// Importo i CSS Modules delle Card
import style from "./card.module.css";
// Importo solo la funzione tagsColor (mi servirà per colorare la lista) del componente Card
import { tagsColor } from "./Card";
export default function TagList() {
    // Mi ricavo tutti i valori di posts.tags
    const tagsFiltered = posts.map((post) => {
        return post.tags;
    });

    // console.log('Singole chiavi "tags" filtrate ', tagsFiltered);    //console log di prova

    // Mi creo un array di accumulo vuoto
    let unireTags = [];
    // Faccio un forEach dove concateno su un unico array (unireTags) i valori di tutte le tags
    tagsFiltered.forEach((post) => {
        // Concateno il post corrente all'array unireTags
        unireTags = unireTags.concat(post);
    });

    // Mi ricavo una collezione di valori unici filtrando l'array unireTags[] creando un oggetto Set che appunto permette di creare una collezione di valori univoci del valore che gli si passa
    unireTags = new Set(unireTags);

    // console.log("Singoli post univoci e non ripetuti uniti su un unico array: ", unireTags);    //console log di prova


    let valoreRestituito = [];
    for (let i of unireTags) {
        valoreRestituito.push(i);
    }
    // console.log(valoreRestituito);   //test


    // Parte html da ritornare
    return (
        <>
            <div className={`${style.cards} card col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3`}>
                <div className="card-body">
                    <h3>Lista dei tag presenti:</h3>
                    <ul>
                        {valoreRestituito.map((element) => {
                            return <li key={element} className={`${tagsColor(element)}`}>
                                {element}
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}