const { selfData } = require('../../../data/data')  

// Self API
export default function selfDataHandler(req, res) {
    try {
        return res.status(200).json(selfData)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}