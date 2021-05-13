import './styles.css';


export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            className="text-input"
            type="search"
            onChange={handleChange}
            placeholder="Escreve alguma coisa ai"
        />
    );
}