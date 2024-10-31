import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;//모바일처럼 콘텐츠가 화면 가운데 위치
    margin: 0 auto; //모바일처럼 콘텐츠가 화면 가운데 위치
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color : white ;
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    
    border-radius: 15px;
    a{
        transition: color 0.2s ease-in;
        padding: 20px;//카드 전체를 클릭 가능
        display: block; //카드 전체를 클릭 가능
    }
    &:hover{
        a{
            color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Loader = styled.div`
    text-align: center;
`;

const Title = styled.h1`
font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]); //<CoinInterface[]> : CoinInterface모양의 객체들이 배열로 이루어진 타입이라고 TS에게 알려줌
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? <Loader>loading...</Loader> :
            <CoinsList>
            {coins.map(coin => <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>)}
        </CoinsList>
            }
            
        </Container>
    )
}

export default Coins;