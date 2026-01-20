/**
 * Types for Notion API responses
 */

export interface NotionTextContent {
  plain_text: string;
}

export interface NotionTitle {
  type: "title";
  title: NotionTextContent[];
}

export interface NotionRichText {
  type: "rich_text";
  rich_text: NotionTextContent[];
}

export interface NotionSelect {
  type: "select";
  select: { name: string } | null;
}

export interface NotionMultiSelect {
  type: "multi_select";
  multi_select: Array<{ name: string }>;
}

export interface NotionNumber {
  type: "number";
  number: number | null;
}

export interface NotionCheckbox {
  type: "checkbox";
  checkbox: boolean;
}

export interface NotionDate {
  type: "date";
  date: { start: string } | null;
}

export interface NotionUrl {
  type: "url";
  url: string | null;
}

export interface NotionEmail {
  type: "email";
  email: string | null;
}

export interface NotionPhoneNumber {
  type: "phone_number";
  phone_number: string | null;
}

export type NotionProperty =
  | NotionTitle
  | NotionRichText
  | NotionSelect
  | NotionMultiSelect
  | NotionNumber
  | NotionCheckbox
  | NotionDate
  | NotionUrl
  | NotionEmail
  | NotionPhoneNumber;

export interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

export interface NotionDatabaseQueryResponse {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
}
