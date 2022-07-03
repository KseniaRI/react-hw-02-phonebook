import { nanoid } from 'nanoid';
const filterId = nanoid();

export const Filter = ({ value, onChange }) =>
    
    <label htmlFor={filterId}>Find Contacts by name
        <input type="text" value={value} onChange={onChange} id={filterId} />
    </label>;