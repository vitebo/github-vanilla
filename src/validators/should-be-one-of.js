export default function shouldBeOneOf(options = [], value) {
  if (!options.includes(value)) {
    throw new Error(
      `The value received was ${value}, but one of these were expected: ${[...options]}`,
    );
  }
}
