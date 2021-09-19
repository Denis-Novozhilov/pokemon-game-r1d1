// import './App.css';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../pokemons';
import s from './style.module.css';

import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import MenuHeader from '../../components/MenuHeader';

function HomePage({ onChangePage }) {

    const handleHeaderClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return (
        <div className="App">

            <MenuHeader />

            <Header
                title='Pokemon Game'
                onClickButton={handleHeaderClickButton}
            >
                <p>This is simple triple triad card game</p>
            </Header>

            <Layout
                urlBg={bg2}
                title='Layout_1__Title'
            >

                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>

            </Layout>

            <Layout
                colorBg='#009688'
                title='Layout_2__Title'
            >

                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>

                <div className={s.flex}>

                    {
                        POKEMONS.map(({ name, id, img, type, values }) =>

                            <PokemonCard
                                key={id}
                                name={name}
                                id={id}
                                img={img}
                                type={type}
                                values={values} />)
                    }

                </div>

            </Layout>

            <Layout
                urlBg={bg3}
                title='Layout_3__Title'
            >

                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>

            </Layout>

            <Footer />

        </div>
    );
}

export default HomePage;