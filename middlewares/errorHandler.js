export default function(err, req, res, next) { 
    console.log(err);
    res.status(500).json({ 
        succes: false, 
        message: err.message
    });
}