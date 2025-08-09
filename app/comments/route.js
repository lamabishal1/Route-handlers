import {comments } from "./data"
import { NextRequest } from "next/server";

export function GET( NextRequest ) {
    const searchParams = NextRequest.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query
    ? comments.filter((comment)=> comment.text.includes(query)):comments;
    return Response.json(filteredComments);
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