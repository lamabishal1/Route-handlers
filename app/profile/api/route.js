import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { cookies } from 'next/headers';

export async function GET( NextRequest) {
  // const requestHeaders = new Headers(NextRequest.headers)
  // console.log(requestHeaders.get('authorization'));

    const headersList = await headers();
    console.log( headersList.get('Authorization'));

  const theme = NextRequest.cookies.get('theme');
  console.log(theme);

  const cookieStore = await  cookies();
  cookieStore.set("resultsPerPage", "10");
  console.log((await cookieStore).get("resultsPerPage"));

  return new Response('<h1>Profile API data</h1>',{
    headers:{
      'Content-Type': 'text/html',
      "Set-Cookie":"theme=dark",
    },
});
}










