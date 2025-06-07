const pool = require("../config/db");

exports.profileget = async () => {
    const result = await pool.query("SELECT * FROM profiles");
    return result.rows;
}

exports.profilegetbyid = async () => {
    const result = await pool.query("SELECT * FROM Profiles Where id = $1", [id]);
    return result.rows[0];
}

exports.CreateProfile = async (name, age, wp, profile) => {
    const result = await pool.query("INSERT INTO Profiles (name ,ager ,wp , profile) values  RETURNING  *", [
        name, age, wp, profile
    ])
    return result.rows[0]
}


exports.updateprofile = async (name, age, wp, profile, id) => {
    const result = await pool.query(
        "UPDATE  profiles SET name = $1 age =$2 wp =$3 profile =$4  Where id =$5 RETURNING *", [
        name, age, wp, profile, id
    ]
    )
    return result.rows[0];
}

exports.deleteprofile = async (id) => {
    const result = await pool.query(
        "DELETE  FROM Profile Where id = 5 RETURNING *  ", [id]
    )
    return result.rows[0]
}