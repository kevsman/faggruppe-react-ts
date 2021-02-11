import React from 'react'

type Prop = {
    filterValue: string;
    name: string;
    onFilterValueChange: (event: any) => void;
}

const InputFilter: React.FC<Prop> = (props) => {
    return (
        <>
            <label>Search
                <input type="text" name={props.name} value={props.filterValue} onChange={props.onFilterValueChange}>
                </input>
            </label>
        </>
    );
}   

export default InputFilter;