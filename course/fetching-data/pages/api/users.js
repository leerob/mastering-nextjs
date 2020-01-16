export default (req, res) => {
    /*
     * Middleware included to parse the incoming request `req`.
     * req.cookies
     * req.query
     * req.body
     */

    /*
     * Express-like helper functions for the response `res`.
     * res.status(200);
     * res.json({});
     * res.send('HTTP response');
     */

    return res.status(200).json([
        {
            email: 'me@leerob.io',
            id: 1,
            name: 'Lee'
        }
    ]);
};
