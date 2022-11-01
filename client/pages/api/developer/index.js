const { developerData } = require('../../../data/data')

export default function developerDataHandler(req, res) {
    try {
        return res.status(200).json(developerData)   
    } catch (error) {
       return res.status(500).json({message: error.message})
    }   
}