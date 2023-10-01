'use client';

import { useSearchParams } from "@/node_modules/next/navigation";

export default function Watch(){
    const videoPrefix = 'https://storage.googleapis.com/enmanuel-yt-processed-videos/';
    const videoSrc = useSearchParams().get('v');

    return(
        <div>
            <h1>Watch Page</h1>
            <video controls src={videoPrefix+ videoSrc}  />
        </div>
    );
}

export const revalidate = 30;