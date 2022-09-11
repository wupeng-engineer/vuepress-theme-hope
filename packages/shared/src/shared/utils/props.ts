import { zlibSync, unzlibSync, strToU8, strFromU8 } from "fflate";

export function utoa(data: string): string {
  const buffer = strToU8(data);
  const zipped = zlibSync(buffer, { level: 9 });
  const binary = strFromU8(zipped, true);

  return Buffer.from(binary).toString("base64");
}

export function atou(base64: string): string {
  const binary = Buffer.from(base64, "base64").toString();

  // zlib header (x78), level 9 (xDA)
  if (binary.startsWith("\x78\xDA"))
    return strFromU8(unzlibSync(strToU8(binary, true)));

  // old unicode hacks for backward compatibility
  // https://base64.guru/developers/javascript/examples/unicode-strings
  return decodeURIComponent(escape(binary));
}
