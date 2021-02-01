function errorHandler(err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
        // erro de autenticação jwt
        return res.status(401).json({
            message: "Usuário não autorizado."
        })
    }
    if(error.name === 'ValidationError') {
        // erro de validação
        return res.status(401).json({
            message: err
        })
    }

    // erro de servidor padrão
    return res.status(500).json(err)
}

module.exports = errorHandler;