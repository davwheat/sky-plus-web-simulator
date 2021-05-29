/**
 * All genres mapped to their respective genre IDs.
 *
 * Genre ID matches what is specified in `xsg`.
 */
export enum Genres {
  /**
   * Includes Sky Intro, etc.
   */
  SkySpecialChannels = 0,
  Shopping = 1,
  Kids = 2,
  Entertainment = 3,
  Radio = 4,
  News = 5,
  Movies = 6,
  Sports = 7,
  /**
   * Not present on new boxes. Has no channels in the category.
   *
   * Not sure if this is `8` or not, but it slots nicely in the gap.
   */
  LifestyleAndCulture = 8,
  Adult = 9,
  /**
   * Not present on new boxes. Has no channels in the category.
   *
   * Not sure if this is `10` or not, but it slots nicely in the gap.
   */
  GamingAndDating = 10,
  Documentaries = 11,
  Music = 12,
  Religion = 13,
  International = 14,
  /**
   * No channels are in this category.
   */
  Specialist = 15,
}

export const GenreName: Record<Genres, string> = {
  [Genres.SkySpecialChannels]: '',
  [Genres.Shopping]: 'Shopping',
  [Genres.Kids]: 'Kids',
  [Genres.Entertainment]: 'Entertainment',
  [Genres.Radio]: 'Radio',
  [Genres.News]: 'News',
  [Genres.Movies]: 'Movies',
  [Genres.Sports]: 'Sports',
  [Genres.LifestyleAndCulture]: 'Lifestyle & Culture',
  [Genres.Adult]: 'Adult',
  [Genres.GamingAndDating]: 'Gaming & Dating',
  [Genres.Documentaries]: 'Documentaries',
  [Genres.Music]: 'Music',
  [Genres.Religion]: 'Religion',
  [Genres.International]: 'International',
  [Genres.Specialist]: 'Specialist',
}
