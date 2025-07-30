import {comments } from "./data"
export function GET() {
    return Response.json(comments);
}

export async function POST(request){
    const comment = await request.json();
    const newcomment = {
        id: comments.length + 1,
        text: comment.text,}
        ;
        comments.push(newcomment);
        return new Response(JSON.stringify(newcomment), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
        });
} 