export default (req, res) => {
    const {
        query: {id}
    } = req;

    res.status(200).json({
        email: 'me@leerob.io',
        id,
        name: 'Lee'
    });
};
