"use client"
import { AGPosts } from "@/features/app/helper/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: AGPosts });
  useEffect(() => {
    console.log(posts);

  }, [posts])
  return (
    <div>hello this is main page</div>
  );
}
