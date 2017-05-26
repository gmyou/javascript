var arr = [1, 2, 3, 4, 5];

var results: number[] = await Promise.all(arr.map(async (item): Promise<number> => {
    await callAsynchronousOperation(item);
    return item + 1;
}));