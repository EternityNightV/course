import { db } from "@/lib/db";

export const getProgress = async(
    userId : string,
    courseId : string
) : Promise<number> => {
    try {
        const publsihedChapters = await db.chapter.findMany({
            where : {
                courseId : courseId,
                isPublished : true
            },
            select : {
                id : true
            }
        })

        const publsihedChaptersIds = publsihedChapters.map((chapter) => chapter.id)

        const validCompletedChapters = await db.userProgress.count({
            where : {
                userId : userId,
                chapterId : {
                    in : publsihedChaptersIds
                },
                isCompleted : true
            }
        })

        const progressPercentage = (validCompletedChapters / publsihedChapters.length) * 100

        return progressPercentage
    } catch (error) {
        console.log('[GET_PROGRESS]', error);
        return 0
    }
}