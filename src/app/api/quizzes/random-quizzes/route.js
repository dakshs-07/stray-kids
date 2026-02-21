import clientPromise from "../../../../lib/mongodb"; 

export async function GET() {
    const client = await clientPromise;
    const db = client.db("quizApp");
  const randomQuizzes = await db.collection("quizzes")
    .aggregate([{ $sample: { size: 3 } }])
    .toArray();
  return Response.json(randomQuizzes);
}
