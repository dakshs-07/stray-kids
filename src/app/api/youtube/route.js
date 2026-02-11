export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UC9rMiEjNaCSsebs31MRDCRA";

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=4`,
  );

  const data = await res.json();

  return Response.json(data);
}
