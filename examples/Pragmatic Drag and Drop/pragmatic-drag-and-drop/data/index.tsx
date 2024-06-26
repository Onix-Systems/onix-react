export type Item = {
  name: string;
  role: string;
  avatarUrl: string;
  itemId: string;
};

function loadAvatar(name: string) {
  return null;
}

export const confluenceTeam: Item[] = [
  { name: "Jane", role: "Product Manager" },
  { name: "Alex", role: "Software Engineer" },
  { name: "Max", role: "Software Engineer" },
  { name: "Sam", role: "Engineering Manager" },
  { name: "Kate", role: "Content Designer" },
  { name: "Nastya", role: "Design Manager" },
  { name: "Lilly", role: "Product Manager" },
  { name: "Jake", role: "Principal Engineer" },
  { name: "Will", role: "Lead Designer" },
  { name: "Entony", role: "Senior Engineer" },
  { name: "Colin", role: "Software Engineer" },
  { name: "Jenny", role: "Senior Designer" },
].map((person) => {
  return {
    ...person,
    avatarUrl: loadAvatar(person.name),
    itemId: person.name,
  };
});

export const jiraTeam: Item[] = [
  { name: "Alexa", role: "Design Researcher" },
  { name: "Leo", role: "Content Designer" },
  { name: "Myra", role: "Engineering Manager" },
  { name: "Rahul", role: "Product Manager" },
  { name: "Michel", role: "Senior Designer" },
  { name: "Anna", role: "Senior Engineer" },
  { name: "Claudia", role: "Senior Engineer" },
  { name: "Eleonora", role: "Lead Designer" },
].map((person) => {
  return {
    ...person,
    avatarUrl: loadAvatar(person.name),
    itemId: person.name,
  };
});

export const trelloTeam: Item[] = [
  { name: "Hasan", role: "Designer" },
  { name: "Lara", role: "Design Researcher" },
  { name: "Lina", role: "Product Manager" },
  { name: "Oliver", role: "Senior Designer" },
  { name: "Jeremy", role: "Engineering Manager" },
  { name: "Sonya", role: "Design Manager" },
  { name: "Bill", role: "Program Manager" },
  { name: "Effie", role: "Senior Engineer" },
  { name: "Tanya", role: "Design Manager" },
  { name: "Kateryna", role: "Program Manager" },
].map((person) => {
  return {
    ...person,
    avatarUrl: loadAvatar(person.name),
    itemId: person.name,
  };
});

export type ColumnType = {
  title: string;
  columnId: string;
  items: Item[];
};
export type ColumnMap = { [columnId: string]: ColumnType };

export function getInitialData() {
  const columnMap: ColumnMap = {
    confluence: {
      title: "Confluence",
      columnId: "confluence",
      items: confluenceTeam,
    },
    jira: {
      title: "Jira",
      columnId: "jira",
      items: jiraTeam,
    },
    trello: {
      title: "Trello",
      columnId: "trello",
      items: trelloTeam,
    },
  };

  const orderedColumnIds = ["confluence", "jira", "trello"];

  return {
    columnMap,
    orderedColumnIds,
  };
}
