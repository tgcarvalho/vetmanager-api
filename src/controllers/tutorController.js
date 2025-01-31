class TutorController {
    static async getAll(req, res){
        try {
            res.status(200)
            .send({message: 'boas-vindas à API - recurso de tutor'})
        } catch (error) {
            
        }
    }
}

module.exports = TutorController