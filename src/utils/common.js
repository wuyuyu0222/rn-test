export function toPercent(num) {
    const percent = (+num * 100).toFixed(2)
    return `${percent}%`
}