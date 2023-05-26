import Card from "./card"



export default function Cards({item, styles}) {
    return (
        <>
            <ul className={styles.galeria__cards}>
                {item.map((item) => {
                    return (
                       <Card item={item} styles={styles} key={item.id}/>
                    )
                })}
            </ul>
        </>
    )
}