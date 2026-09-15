// 日本の総人口(万人単位)の目安値
// 出典: 総務省統計局「国勢調査」等の公表値をもとにした概数
// (国勢調査開始の1920年より前は公的な人口調査に基づく推計値)
const POPULATION_POINTS = [
  { year: 1872, man: 3480 },
  { year: 1880, man: 3650 },
  { year: 1890, man: 3980 },
  { year: 1900, man: 4385 },
  { year: 1910, man: 4984 },
  { year: 1920, man: 5596 },
  { year: 1930, man: 6445 },
  { year: 1940, man: 7193 },
  { year: 1945, man: 7200 },
  { year: 1950, man: 8320 },
  { year: 1955, man: 8928 },
  { year: 1960, man: 9342 },
  { year: 1965, man: 9827 },
  { year: 1970, man: 10372 },
  { year: 1975, man: 11194 },
  { year: 1980, man: 11706 },
  { year: 1985, man: 12105 },
  { year: 1990, man: 12361 },
  { year: 1995, man: 12557 },
  { year: 2000, man: 12693 },
  { year: 2005, man: 12777 },
  { year: 2010, man: 12806 },
  { year: 2015, man: 12709 },
  { year: 2020, man: 12615 },
  { year: 2024, man: 12380 },
]

// 万人単位の数値を「1億1300万人」のような表示文字列に整形する
function formatMan(man) {
  const rounded = Math.round(man / 100) * 100
  const oku = Math.floor(rounded / 10000)
  const remainMan = rounded % 10000

  if (oku > 0) {
    return remainMan > 0 ? `${oku}億${remainMan}万人` : `${oku}億人`
  }
  return `${remainMan}万人`
}

// 指定した西暦の日本の総人口(概数)を文字列で返す
// データの範囲外(古すぎる/新しすぎる)の場合は null を返す
export function getPopulation(year) {
  const first = POPULATION_POINTS[0]
  const last = POPULATION_POINTS[POPULATION_POINTS.length - 1]
  if (year < first.year || year > last.year) return null

  const exact = POPULATION_POINTS.find((p) => p.year === year)
  if (exact) return formatMan(exact.man)

  const nextIndex = POPULATION_POINTS.findIndex((p) => p.year > year)
  const prev = POPULATION_POINTS[nextIndex - 1]
  const next = POPULATION_POINTS[nextIndex]
  const ratio = (year - prev.year) / (next.year - prev.year)
  const man = prev.man + (next.man - prev.man) * ratio

  return formatMan(man)
}
