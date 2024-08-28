import styled from 'styled-components';

const DashboardContainer = styled.div`
    width: 600px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

const Dashboard = ({ selectedPokemon }) => {
    return (
        <DashboardContainer>
            <h2>대시보드</h2>
            {selectedPokemon.length === 0 ? (
                <p>선택된 포켓몬이 없습니다.</p>
            ) : (
                <ul>
                    {selectedPokemon.map((pokemon) => (
                        <li key={pokemon.id}>{pokemon.korean_name}</li>
                    ))}
                </ul>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
