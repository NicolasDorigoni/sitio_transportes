import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">

            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>

            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum consectetur iure illo labore id, optio, voluptates beatae, rerum explicabo dolor veritatis velit excepturi omnis repudiandae repellat
                    earum vel aperiam itaque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem enim distinctio. Accusamus animi inventore nesciunt provident dolores nostrum perferendis! Fuga beatae autem eos mollitia, assumenda
                    reiciendis. Dolores, rem fugit.</p>

                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>

                </div>
            </div>


        </main>
    );
}

export default HomePage;