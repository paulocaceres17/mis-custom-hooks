# useForm Hook

Ejemplo de uso:
```
    const initialState = {
        name: '',
        age: '',
        email: ''
    }
    const [ state, handleInputChange, cleanForm ] = useForm(initialState);
```

useCounter()    // recibe un valor por defecto