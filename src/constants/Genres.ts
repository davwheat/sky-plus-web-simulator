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
  /**
   * Not present on new boxes. Appears to have merged with Entertainment.
   */
  LifestyleAndCulture = 3,
  Radio = 4,
  News = 5,
  Movies = 6,
  Sports = 7,
  Adult = 9,
  Documentaries = 11,
  Music = 12,
  Religion = 13,
  International = 14,
  /**
   * No channels are in this category.
   */
  Specialist = 15,
}
