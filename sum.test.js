import sum from "./sum";

describe('test for sum function', () => {

    test("adds -5 + -5 to equal -10",()=>{
        expect(sum(-5, -5)).toBe(-10);
    })
  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
