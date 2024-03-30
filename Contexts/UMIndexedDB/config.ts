
/**
 * This file contains the configuration for the Urban Memories IndexedDB database wrapper.
 * version must be incremented when the database schema changes.
 */
export const UMIndexedDBConfig = {
  version: 1,
  dbName: "pantryProjectDB",
  tables: [
    { name: "users", columns: [] },
    { name: "spaces", columns: [] },
    { name: "categories", columns: [] },
    { name: "items", columns: [] },
  ],
};