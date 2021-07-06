export function splitMenuIntoPages<T>(items: T[]): T[][] {
  // One page! Easy exit!
  if (items.length <= 10) return [items]

  let itemsRemaining = [...items]
  let pages = []

  while (itemsRemaining.length > 0) {
    let page

    // If remaining items fit on one page, put them all on that page
    if (itemsRemaining.length <= 10) {
      page = itemsRemaining
      itemsRemaining = []
    }
    // Otherwise, take next 9 and add 'More...' to bottom
    else page = itemsRemaining.splice(0, 9)

    pages.push(page)
  }

  return pages
}
