import clientPromise from "../../../../../lib/mongodb";

export async function GET(req, { params }) {
  const {slug} = params;
  const client = await clientPromise;
  const db = client.db("quizApp");

  const stats = await db
    .collection("quizResults")
    .aggregate([
      { $match: { quizSlug: slug } },
      {
        $group: {
          _id: "$score",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
    ])
    .toArray();

  return Response.json(stats);
}
