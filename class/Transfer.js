module.exports = class Transfer {
    constructor(fromUser, toUser, valor) {
        this.valor = valor
        this.fromUser = fromUser
        this.toUser = toUser
        this.dataDeCriação = new Date()
    }
}