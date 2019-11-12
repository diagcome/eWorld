module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET,
        tokens: {
            access: {
                type: 'access',
                expiresIn: '1d'
            },
            refresh: {
                type: 'refresh',
                expireIn:'24d'
            },
        },
    },
};