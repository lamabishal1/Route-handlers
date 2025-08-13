export const dynamic = 'force-static';

export function GET() {

    const categories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing' },
        { id: 4, name: 'Home & Kitchen' },
    ];


  return Response.json(categories);
}