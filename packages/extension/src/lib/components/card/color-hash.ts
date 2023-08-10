/* eslint-disable */
/* @ts-ignore */
const DEFAULT_COLOR = "#f2f2f2"

// https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
export function string_to_color (str: string): string {
    if (str === "") {
        return DEFAULT_COLOR
    }

    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color_hex = ""

    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF
        let value_to_repeat = value.toString(16)[1]
        if (!value_to_repeat === undefined) {
            value_to_repeat = value.toString(16)[0]
        }
        const c = value_to_repeat.repeat(2)
        // const c = value.toString(16)
        color_hex += ("00" + c).substr(-2)
    }
    const color_rgb = hex_to_rgb(color_hex)
    const color_hsv = rgb_to_hsv(color_rgb.r, color_rgb.g, color_rgb.b)
    color_hsv.h += 0.05
    color_hsv.s = 0.7
    color_hsv.v = 0.7
    const color_rgb2 = hsv_to_rgb(color_hsv.h, color_hsv.s, color_hsv.v)
    const color_hex2 = rgb_to_hex(color_rgb2.r, color_rgb2.g, color_rgb2.b)

    // console.log({level:"dev", msg:"color transform", color_hex, color_rgb, color_hsv, color_rgb2, color_hex2})

    const colour = "#" + color_hex2
    return colour
}

/* accepts parameters
* h  Object = {h:x, s:y, v:z}
* OR
* h, s, v
* https://stackoverflow.com/a/17243070/21141047
*/
function hsv_to_rgb (h: number, s: number, v: number): { r: number, g: number, b: number } {
    let r: number, g: number, b: number
    // let i:number, f:number, p:number, q:number, t:number
    // if (arguments.length === 1) {
    //     s = h.s, v = h.v, h = h.h;
    // }
    const i = Math.floor(h * 6)
    const f = h * 6 - i
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break
        case 1: r = q, g = v, b = p; break
        case 2: r = p, g = v, b = t; break
        case 3: r = p, g = q, b = v; break
        case 4: r = t, g = p, b = v; break
        case 5: r = v, g = p, b = q; break
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    }
}

/* accepts parameters
* r  Object = {r:x, g:y, b:z}
* OR
* r, g, b
* https://stackoverflow.com/a/17243070/21141047
*/
function rgb_to_hsv (r: number, g: number, b: number): { h: number, s: number, v: number } {
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    let h = -1
    const s = (max === 0 ? 0 : d / max)
    const v = max / 255

    switch (max) {
    case min: h = 0; break
    case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break
    case g: h = (b - r) + d * 2; h /= 6 * d; break
    case b: h = (r - g) + d * 4; h /= 6 * d; break
    }

    return {
        h,
        s,
        v
    }
}

/**
* https://www.programmingcube.com/how-to-convert-rgb-to-hex-and-vice-versa-in-javascript/
* @param r
* @param g
* @param b
* @returns
*/
function rgb_to_hex (r: number, g: number, b: number): string {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
* https://www.programmingcube.com/how-to-convert-rgb-to-hex-and-vice-versa-in-javascript/
* @param hex
* @returns
*/
function hex_to_rgb (hex: string): { r: number, g: number, b: number } {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return { r, g, b }
}
