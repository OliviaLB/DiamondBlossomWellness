export interface ServiceShowcaseProps {
  /** Called with the chosen treatment's id whenever the selection changes. */
  onTreatmentChange?: (treatmentId: string) => void;
  /** The selected treatment's id. An unknown id falls back to the first treatment. */
  treatmentId?: string;
}
