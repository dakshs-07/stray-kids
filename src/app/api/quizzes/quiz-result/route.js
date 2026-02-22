import clientPromise from "../../../../lib/mongodb"

export async function POST(req){
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("quizApp");

    await db.collection("quizResults").insertOne({
        quizSlug: body.quizSlug,
        score:body.score,
        total: body.total,
        createdAt: new Date(),
    })
    return Response.json({success: true})
}