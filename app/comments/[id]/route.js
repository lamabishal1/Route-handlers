import { comments } from "../data";

export function GET( _request, { params }) {
    const { id } = params;
    const comment = comments.find((comment)=> comment.id === parseInt(id));

    if (!comment){
        return new Response(JSON.stringify({message:"Comment not found"}),{
            status: 404,
            headers:{'Cotent-Type': 'application/json'},    
        });
    }
     return Response.json(comment);

    
}