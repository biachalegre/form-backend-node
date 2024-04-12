const db = require("../../../core/config/database");

exports.fetch = async function () {
    const users = (await db.query(`SELECT * FROM public."USER_TABLE"`)).rows;
    return users;
}
