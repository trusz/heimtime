// https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
export function string_to_color(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    // debugger;
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        // const c = value.toString(16)[1].repeat(2)
        const c = value.toString(16)
        colour += ('00' + c).substr(-2);
    }

    console.log({level:"dev", msg:"stringtocolor", str, colour})
    return colour
}