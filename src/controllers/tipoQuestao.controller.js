const db = require('../models/index.js')
const TipoQuestao = db.tipoQuestao

exports.create = (req, res) => {
    const tipoQuestao = {
        descricao: req.body.descricao,
    }

    TipoQuestao.create(tipoQuestao)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred...'
            })
        })
}

exports.findAll = (req, res) => {
    TipoQuestao.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred.'
        })
    })
}

exports.delete = (req, res) => {
    const tipoQuestao = {
        idTipoQuestao: req.body.idTipoQuestao
    }
  
    TipoQuestao.destroy({
        where: {
            idTipoQuestao: req.body.idTipoQuestao
        }
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred...'
            })
        })

}