import { useParams } from 'react-router-dom';

function Detail(props){
    const { id } = useParams();
    const thisSpace = props.space.find(s => s.gisobjid === id)

    return (
        <>
            <h1>{thisSpace.eapply}</h1>
            <h1>{thisSpace.location}</h1>
        </>
    )
}

export default Detail;