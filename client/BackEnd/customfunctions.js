


const findemail =  async(email) => {
    let found = await pool.query(
     "SELECT email FROM users WHERE email = $1 ",[email]) 
     return found.rowCount;
   
   };

module.exports = findemail