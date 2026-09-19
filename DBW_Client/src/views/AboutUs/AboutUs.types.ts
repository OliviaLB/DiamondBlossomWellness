export interface AboutSectionContent {
  id: string;
  heading: string;
  /** Body paragraphs, shown before the list. */
  paragraphs: string[];
  /** Lead-in sentence for the list, e.g. "... passed exams in:". */
  listIntro?: string;
  list?: string[];
  /** How many columns the list spreads across from `sm:` up. */
  listColumns?: 1 | 2;
  /** Paragraphs that follow the list. */
  closingParagraphs?: string[];
}
