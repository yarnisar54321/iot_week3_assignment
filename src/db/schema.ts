import { relations } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";

// export const genres = t.pgTable("genres", {
//   id: t.bigserial({ mode: "number" }).primaryKey(),
//   title: t
//     .varchar({
//       length: 255,
//     })
//     .notNull(),
// });

export const genderEnum = t.pgEnum("gender", ["male", "female"]);

export const students = t.pgTable("students", {
  id: t.bigserial("id", { mode: "number" }).primaryKey(),
  firstName: t.varchar("firstname", { length: 255 }).notNull(),
  lastName: t.varchar("lastname", { length: 255 }).notNull(),
  studentId: t.varchar("student_id", { length: 50 }).notNull().unique(),
  DOB: t.date("dob"),
  gender: genderEnum("gender"),
});

// export const bookRelations = relations(books, ({ one }) => ({
//   genre: one(genres, {
//     fields: [books.genreId],
//     references: [genres.id],
//   }),
// }));