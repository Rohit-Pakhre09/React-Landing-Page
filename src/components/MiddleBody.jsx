function MiddleBody() {
    return(
        <>
            <section className="body">
                {/* Plant Image */}
                <section className="imageSection">
                    <img src="https://www.freeiconspng.com/thumbs/plants-png/beautiful-transparent-plants-png-6.png" height="400px" alt="plant" />
                </section>

                {/* Plant Information */}
                <section className="info">
                    <p style={{fontSize: '40px'}}>CLASSIC PEACE LILY</p>
                    <p style={{fontSize: '20px'}}>POPULAR HOUSE PLANT</p>

                    <p style={{fontSize: '50px', marginTop: '60px'}}>$18</p>
                    <p style={{fontSize: '20px', marginTop: '20px'}}>Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.</p>

                    <div style={{marginTop: '20px'}}>
                        <button className="btns">ADD TO CART</button>
                        <button className="btns">WISHLIST</button>
                    </div>
                </section>
            </section>
        </>
    );
} 

export default MiddleBody