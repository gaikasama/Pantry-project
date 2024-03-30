"use client";
import { UMIndexedDBWrapper } from "@tyanpey/urban_memories_lib";

/**
 * Wrapper for the UMIndexedDB.
 * As the Urban Memories does not support Next.js yet, this wrapper is used to provide the IndexedDB client to the application.
 * Wihtout this ClientWrapper, webpack error will be thrown. (needs more investigation to understand why this happens).
 */
export const UMIDBClientWrapper = UMIndexedDBWrapper;