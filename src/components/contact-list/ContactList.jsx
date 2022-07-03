export const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                        <li key={id}>{name}: {number}
                            <button id={id} type="button" onClick={deleteContact}>Delete</button>
                        </li>
                )
            }
            )}
        </ul>
    );
}