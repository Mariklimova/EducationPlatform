function Item({ array }) {
    return <>
        {array.map((el,index) => <p key={index}>{el}</p>)}

    </>
}
export default Item