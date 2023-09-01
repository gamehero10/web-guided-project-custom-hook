import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue, cb) => {
    const[values, setValues] = useLocalStorage(key, initialValue);

    const clearForm = () => {
        setValues(initialValue);
    }

    const handleChanges = e => {
        setValues({...values, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = e => {
        e.preventDefault();
        cb();
    }

    return [values, clearForm, handleChanges, handleSubmit];

}