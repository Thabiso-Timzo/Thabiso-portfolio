const { hobbiesData } = require('../../../data/data')

export default function hobbiesDataHandler(req, res) {
    try {
        return res.status(200).json(hobbiesData)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}