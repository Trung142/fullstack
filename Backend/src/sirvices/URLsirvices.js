const pool = require("../configs/database")
const updates = (req, res) => {
    const sql = `update Acount set name = ?, email = ?,password = ? where id = ?`;
    pool.query(sql, [req.body.name, req.body.email, req.body.password, req.params.id], (err, data) => {
        if (err) {
            return res.json("erro");
        }
        return res.json(data);
    })
}
module.exports = updates;