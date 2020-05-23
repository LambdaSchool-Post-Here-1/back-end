async function add(user)
{
  try
  {
    const [id] = await db("users").insert(user, "id");

    return db("users").where({ id }).first();
  } catch (error)
  {
    throw error;
  }
}