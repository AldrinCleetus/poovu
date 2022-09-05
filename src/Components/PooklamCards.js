const PooklamCards = ({image,name,date}) => {
    return ( 
        <div className="mt-5 mx-4 custom-card column is-4 has-background-info has-text-white">
            <img src={image} alt="design" />
            <div className=" has-text-centered ">
                <h2 className="is-size-3">{name}</h2>
                <h3 className="is-size-6 ">{date}</h3>
            </div>
        </div>
     );
}
 
export default PooklamCards;