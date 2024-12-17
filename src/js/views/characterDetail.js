import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                setLoading(true);
                setError(null); // Limpiar errores anteriores
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    return (
        <div className="container mt-5">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : error ? (
                <p className="text-center text-danger">{error}</p>
            ) : character ? (
                <div className="text-center">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid mb-4 rounded-circle"
                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                    />
                    <h1 className="mb-3">{character.name}</h1>
                    <p className="lead">Status: {character.status}</p>
                    <p className="lead">Species: {character.species}</p>
                    <p className="lead">Gender: {character.gender}</p>
                    <p className="lead">Origin: {character.origin?.name || "Unknown"}</p>
                </div>
            ) : (
                <p className="text-center">Character details not found.</p>
            )}
        </div>
    );
};

export default CharacterDetail;
