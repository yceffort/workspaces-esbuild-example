/**
 *
 * @param args n개의 숫자로 이루어진 파라미터
 * @returns 합계
 */
export default function sum(...args: number[]) {
  return args.reduce((prev, acc) => acc + prev, 0)
}
