const CatGallery = (props) => {
    return (
        <section className="gallery">
            <h3>View the Kitties Below!</h3>
            <ul>
                {
                    props.arrayOfKitties.map((kitty) => {
                        return(
                            <li>
                                <img src={kitty.url} alt="a beautiful cat" />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default CatGallery;