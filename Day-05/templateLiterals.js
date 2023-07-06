function sides(literals, ...expressions) {
    const [A, P] = expressions;
    return [(P + Math.sqrt(P ** 2 - 16 * A)) / 4, (P - Math.sqrt(P ** 2 - 16 * A)) / 4].sort();
}