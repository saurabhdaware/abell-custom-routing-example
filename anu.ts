function anu<Props extends Record<string, unknown>>(
str: TemplateStringsArray,
...args: string[] | ((props: Props) => string)[]
) {
    const interleaved = args.flatMap((arg, index) => {
        return [arg, str[index + 1]];
    });

    return (props?: Props) =>
    [str[0], ...interleaved]
    .map((part) => {
        return typeof part === "function" ? part(props!) : part;
    })
    .join("");
}

export { anu }