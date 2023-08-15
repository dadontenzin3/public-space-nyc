import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Show(props){
    const { id } = useParams();
    const thisPark = props.park.find(p => p._id === id)

    const [editForm, setEditForm] = useState({
        parkName: "",
        parkPhoto: "",
        parkLink: ""
      });

    const handleChange = (event) => {
        setEditForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
        }));
    };

    // a submit event handler for our edit form
    const handleUpdate = (event) => {
        event.preventDefault();
        props.updatePark(editForm, thisPark._id);
    };

    const loaded = () => {
        return (
            <>
                <h1>{thisPark.parkName}</h1>
                <img src={thisPark.parkPhoto} alt="park"/>
                <a href={thisPark.parkLink}>Visit the website</a>            
            </>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    useEffect(() => {
        if(thisPark) { 
          setEditForm(thisPark)
        }
      }, [thisPark]);

      return (
        <div className="thisPark">
          { thisPark ? loaded() : loading() }
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={editForm.parkName}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.parkPhoto}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editForm.parkLink}
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
            <input type="submit" value="Update Person" />
          </form>
        </div>
      )
}

export default Show; 