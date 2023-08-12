import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props){

    const [newForm, setNewForm] = useState ({
        parkName: "",
        parkPhoto: "",
        parkLink: "",
    });

    const handleChange = (event) => {
        setNewForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPark(newForm);
        setNewForm({
        parkName: '',
        parkPhoto: '',
        parkLink: '',
        });
    };

    const loaded = () => {
        return  props.park.map(({parkName, parkPhoto, _id }) => {
            return (
                <div className="park" key={_id}>
                    <Link to={`/myparks/${_id}`}> 
                        <h1> {parkName} </h1>
                    </Link>
                    <img src={parkPhoto} alt={parkName} />
                </div>
            );
        });
    };
    
    const loading = () => {
        return <h1> Loading ...</h1>
    };

    return ( 
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={newForm.parkName} 
                onChange={handleChange} 
                name="parkName" 
                placeholder="McCarren Park..."/>
                <input 
                type="text" 
                value={newForm.parkPhoto} 
                onChange={handleChange} 
                name="parkPhoto" 
                placeholder="Url to image"/>
                <input 
                type="text" 
                value={newForm.parkLink} 
                onChange={handleChange} 
                name="parkLink" 
                placeholder="Link to park website"/>
                <input type="submit" value ="Add Park"/>
            </form> 
            {props.park ? loaded() : loading()}
        </section>);
};

export default Index; 