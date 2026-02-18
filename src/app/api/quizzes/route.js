import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("quizApp");

  const result = await db.collection("quizzes").insertOne(body);
  return Response.json({
    message: "Quiz Saved bro!",
    id: result.insertedId,
  });
}
