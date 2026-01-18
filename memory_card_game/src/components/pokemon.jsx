import { useState, useEffect } from "react";
import { pikachu } from "./handling_urls";
import "../styles/App.css";

function PokemonCard({ pokemon, handleOnClick }) {
    let id = pokemon.id;
    return (
        <>
            <div className="card" key={id} onClick={() => handleOnClick(id)}>
                <img className="imgg" src={pokemon.src} alt={pokemon.name} />
                <span>{pokemon.name}</span>
            </div>
        </>
    );
}

function Pokemon() {
    const [items, setItems] = useState([]);
    const [clickedItems, setClickedItems] = useState([]);
    let [total, setTotal] = useState(0);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        // Run the async function inside useEffect
        async function loadData() {
            const data = await pikachu();
            setItems(data);
            setLoading(false);
        }
        loadData();
    }, []);

    const handleNewArr = (clickedNum) => {
        // console.log("items before shuffle:", items);
        let shuffled = [...items];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems(shuffled);
        // console.log("items after shuffle:", shuffled);

        if (!clickedItems.includes(clickedNum)) {
            const newScore = clickedItems.length + 1;
            setClickedItems((prev) => [...prev, clickedNum]);
            if (newScore > total) {
                setTotal(newScore);
            }
        } else {
            setClickedItems([]);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <header className="game-header">
                <h1 className="game-title">Pokémon Memory Game</h1>

                <div className="score-container">
                    <div className="score-item">
                        <span className="score-label">Score</span>
                        <span className="score-value">
                            {clickedItems.length}
                        </span>
                    </div>

                    <div className="score-item">
                        <span className="score-label">Best / Total</span>
                        <span className="score-value">{total}</span>
                    </div>
                </div>
            </header>

            <div className="container">
                {items.map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            handleOnClick={handleNewArr}
                        />
                    );
                })}
            </div>
        </>
    );
}

export { Pokemon };
