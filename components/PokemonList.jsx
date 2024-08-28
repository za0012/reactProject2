import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../src/css/main.css';

const ListContainer = styled.div`
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgba(240, 240, 240, 0.521);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(81, 146, 51);
    color: rgb(255, 255, 255);
    border-radius: 5px;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
    const navigate = useNavigate();
    
    return (
        <ListContainer>
            {pokemonList.map((pokemon) => (
                <div className='card' onClick={() => navigate(`${pokemon.id}`)}>
                    <img src={pokemon.img_url} alt={''} />
                    <p>{pokemon.korean_name}</p>
                    <p>{pokemon.id}</p>
                    <Button onClick={() => {}}>추가</Button>
                </div>
            ))}
        </ListContainer>
    );
};

export default PokemonList;
