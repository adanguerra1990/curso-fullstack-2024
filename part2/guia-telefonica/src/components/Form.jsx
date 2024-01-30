import React from 'react';

const Form = ({handleSubmit, handleChangePerson, handleChangeNumber, newName, newNumber}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input onChange={handleChangePerson} value={newName} />
                    <br />
                    Number: <input onChange={handleChangeNumber} value={newNumber} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
