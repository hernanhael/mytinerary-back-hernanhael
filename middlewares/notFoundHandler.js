export default function(req, res, next) { 
    return res.status(404).json({ 
        sucess: false, 
        message: `${req.method} ${req.url} not found`
    });
}