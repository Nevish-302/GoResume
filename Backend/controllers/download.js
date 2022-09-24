const download = async (req, res) => {
    const {_data_profile} = await req.body
    res.download(`${__dirname}../files/${_data_profile}.pdf`)
}

module.exports = {download}