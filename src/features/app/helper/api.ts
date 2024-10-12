export async function AGPosts(): Promise<any> {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await res.json();
    } catch (err: any) {
        console.log(err);
    }

}