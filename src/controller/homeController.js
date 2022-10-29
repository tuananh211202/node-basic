import pool from '../configs/connectDB';

let getHomePage = async (req, res) => {
  // logic
  const [rows, fields] = await pool.execute('SELECT * FROM users');
  return res.render("index.ejs", {dataUser: rows});
};

let getDetailPage = async (req, res) => {
  let id = req.params.userId;
  let [user] = await pool.execute('select * from users where id = ?', [id]);
  console.log(user);
  return res.send(JSON.stringify(user));
}

module.exports = {
  getHomePage,
  getDetailPage,
};
