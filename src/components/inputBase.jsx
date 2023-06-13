export default function inputBase({name, type, error, onChangeInput}) {
    return (
        <>
            <label htmlFor={name}>{name}
                {error && <p className="error">Поле обязательно для заполнения</p>}
            </label>
            <input className="input" onChange={onChangeInput} type={type} name={name} placeholder={name}/>                   
        </>
    )
    
}