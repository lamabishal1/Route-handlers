import { comments } from "../data";

export function GET( _request, { params }) {
    const { id } = params;
    const comment = comments.find((comment)=> comment.id === parseInt(id));

    if (!comment){
        return new Response(JSON.stringify({message:"Comment not found"}),{
            status: 404,
            headers:{'Content-Type': 'application/json'},    
        });
    }
     return Response.json(comment);

    
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const body = await request.json();
    const { text } = body;

    const index = comments.findIndex((comment => comment.id === parseInt(id)));
    comments[index].text = text;
    return Response.json(comments[index]);

}

export async function DELETE(request, { params }) {
    const { id }  = params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}






















