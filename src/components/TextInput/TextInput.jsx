export default function TextInput({ label, id, placeholder, value, setValue }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            />
        </div>
    );
}
