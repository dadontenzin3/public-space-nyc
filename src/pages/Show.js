import { useParams } from 'react-router-dom';

function Show(props){
    const { id } = useParams();
    const thisPark = props.park.find(p => p._id === id)

    return (
        <>
            <h1>{thisPark.parkName}</h1>
            <img src={thisPark.parkPhoto} alt="park"/>
            <a href={thisPark.parkLink}>Visit the website</a>
        </>
    );
}

export default Show; 