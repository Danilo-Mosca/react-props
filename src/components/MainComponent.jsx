import Card from "./Card";
// Importo l'oggetto cities
import posts from '../data/posts';

export default function MainComponent() {
    const arrayPosts = [...posts];
    return (
        // Mappo props cities per popolare le card
        arrayPosts.map((post) => {
            return <Card
                id={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
                published={post.published}
                key={post.id} />
        }
        )
    );
}