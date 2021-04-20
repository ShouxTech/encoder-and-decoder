function textToDecimalArray(text: string): number[] {
    return text.split('').map((char) => {
        return char.charCodeAt(0);
    });
}

function decimalToText(decimal: number): string {
    return String.fromCharCode(decimal);
}

function encode(text: string) {
    const decimalArray = textToDecimalArray(text);
    const encodedArray: string[] = [];
    for (let i = 0; i < decimalArray.length; i++) {
        encodedArray.push(decimalToText(decimalArray[i] << (i % 7)));
    }
    return encodedArray.join('');
}

function decode(text: string) {
    const decimalArray = textToDecimalArray(text);
    const decodedArray: string[] = [];
    for (let i = 0; i < decimalArray.length; i++) {
        decodedArray.push(decimalToText(decimalArray[i] >> (i % 7)));
    }
    return decodedArray.join('');
}

const encoded = encode(`This is my encoded message! ~!@#$%^&*()_+|{}\\/';,.<> 1234567890`);
const decoded = decode(encoded);
console.log(encoded);
console.log(decoded);
