export function validateBodyMiddleware(schema) {
    return(req, res, next) => {
        schema.parse(req,body)
        next()
    }
}


export function validateParamsMiddleware(schema) {
    return(req, res, next) => {
        schema.parse(req,params)
        next()
    }
}


export function validateQueryMiddleware(schema) {
    return(req, res, next) => {
        schema.parse(req,query)
        next()
    }
}