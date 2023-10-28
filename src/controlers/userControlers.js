export const getUsers = (req, res) => {
    console.log('llegaste a la ruta de usuarios');
    res.status(201).json({
        hola: 'chau',
    });
}