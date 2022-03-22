import KitCatImg from "./KitCatImg";
const CatGallery = (props) => {
    return (
        <section className="gallery">
            <h3>View the Kitties Below!</h3>
            <ul>
                {
                    props.arrayOfKitties.map((kitty) => {
                        return <KitCatImg key={kitty.id} url={kitty.url} />
                    })
                }
            </ul>
        </section>
    )
}
export default CatGallery;