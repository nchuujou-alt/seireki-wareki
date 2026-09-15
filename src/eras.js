// 明治以降の元号(開始年は西暦の元年に対応)
export const ERAS = [
  { name: '令和', start: 2019 },
  { name: '平成', start: 1989 },
  { name: '昭和', start: 1926 },
  { name: '大正', start: 1912 },
  { name: '明治', start: 1868 },
]

export const MIN_YEAR = 1868

// 西暦(数値)を和暦の文字列(例: "令和8年" / "明治元年")に変換する
// 対応範囲外(1868年未満)の場合は null を返す
export function toWareki(year) {
  if (!Number.isInteger(year) || year < MIN_YEAR) return null

  const era = ERAS.find((e) => year >= e.start)
  const n = year - era.start + 1
  return `${era.name}${n === 1 ? '元' : n}年`
}

// うるう年かどうかを判定する
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// その年の日数(365 または 366)を返す
export function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365
}
