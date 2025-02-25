export enum PasswordReport {
  empty = "empty",
  valid = "valid",
  invalid = "invalid",
}

export enum PasswordStrength {
  Week = "Week",
  Normal = "Normal",
  Strong = "Strong",
  "Very Strong" = "Very Strong",
  Excellent = "Excellent",
}

export interface IQuestion {
  id: number;
  question: string;
  options: Array<string>;
  correctOption: number;
}
