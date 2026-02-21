import clientPromise from "../lib/mongodb";

export async function getRandomQuizzesFromDB(limit = 3) {
  const client = await clientPromise;
  const db = client.db("quizApp");

  const quizzes = await db
    .collection("quizzes")
    .aggregate([{ $sample: { size: limit } }])
    .toArray();

  return quizzes.map((quiz) => ({
    ...quiz,
    _id: quiz._id.toString(),
  }));
}