import { useParams } from 'react-router-dom';

function Show(props){
    const { id } = useParams();
    const thisPark = props.park.find(p => p._id === id)
    console.log(thisPark);
    return (
        <>
            <h1> Show Page Component </h1>
            <h1>{thisPark.parkName}</h1>
            <h1>{thisPark.parkPhoto}</h1>
            <h1>{thisPark.parkLink}</h1>
        </>
    );
}

export default Show; 