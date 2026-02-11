"use client";
import { useEffect, useState } from "react";

export default function LatestVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      });
  }, []);

  return (
    <div className="my-10 py-2">
      <h1 className="text-center text-4xl my-2 tracking-wide">
        Latest Youtube Content
      </h1>
      <p className="text-center text-muted-foreground text-lg mb-10">
        From the official{" "}
        <a href="https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA">
          <span className="text-(--color-chart-1) underline decoration-wavy">
            @StrayKids
          </span>
        </a>{" "}
        YouTube Channel
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            className="group"
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="rounded-xl"
            />
            <h3 className="mt-2 text-sm font-semibold group-hover:text-gray-500">
              {video.snippet.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
