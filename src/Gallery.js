const CatGallery = (props) => {
    return (
        <section className="gallery">
            <h3>View the Kitties Below!</h3>
            <ul>
                {
                    props.arrayOfKitties.map((kitty) => {
                        return(
                            <li key={kitty.id}>
                                <img src={kitty.url} alt="a wonderful cat" />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default CatGallery;