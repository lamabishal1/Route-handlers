import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET( NextRequest) {
  // const requestHeaders = new Headers(NextRequest.headers)
  // console.log(requestHeaders.get('authorization'));

    const headersList = await headers();
    console.log( headersList.get('Authorization'));
  return new Response('<h1>Profile API data</h1>',{
    headers:{
      'Content-Type': 'text/html',
    },
});
}