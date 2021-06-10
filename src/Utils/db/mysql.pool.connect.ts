import database from "../../Configs/database";

type dbParamsTypes = {
  dbQuery: string;
  dbParams?: string;
};

export default async ({ dbQuery, dbParams}: dbParamsTypes) => {
  try {
    var dbConn = await database("mysql2").getConnection();

    // string validation
    let dbParamsAfterValidationArray : Array<string> = [];
    dbParams.split(",").map((item) => {
      dbParamsAfterValidationArray.push(item.trim())
    });

    return (await dbConn.query(
      dbQuery,
      dbParamsAfterValidationArray
    ));

  } catch (e) {
    throw new Error(e);
  } finally {
    dbConn.release();
  }
};
