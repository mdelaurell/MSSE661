exports.serverError = (res) => err => {
    console.log(err);
    res.status(500).send({
        error: {
            msg: err.message,
        },
        msg: 'Cannot porcess response at this time, Please try again later.',
    });
} ;