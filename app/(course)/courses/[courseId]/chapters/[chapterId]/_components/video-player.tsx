'use client'

import axios from "axios"

import MuxPlayer from "@mux/mux-player-react"
import { Loader2, Lock } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
    playBackId : string,
    courseId : string,
    chapterId : string,
    nextChapterId ?: string,
    isLocked : boolean,
    completeOnEnd : boolean,
    title : string

}

export const VideoPlayer = ({
    playBackId,
    chapterId,
    completeOnEnd,
    courseId,
    isLocked,
    title,
    nextChapterId
} : VideoPlayerProps ) => {

    const [ isReady, setIsReady ] = useState(false)

    return (
        <div className="relative aspect-video">
           {!isLocked && !isReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <Loader2 className="w-8 h-8 animate-spin text-secondary"/>
            </div>    
           )}
           {isLocked && (
            <div className="absolute inset-0  flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
                <Lock className="h-8 w-8"/>
                <p className="text-sm">
                    This chapter is locked
                </p>
            </div>    
           )}
           {!isLocked && (
            <MuxPlayer
             title={title}
             className={cn(!isReady && 'hidden')}
             onCanPlay={() => setIsReady(true)}
             onEnded={() => {}}
             autoPlay
             playbackId={playBackId}
            />
           )}
        </div>
    )
}