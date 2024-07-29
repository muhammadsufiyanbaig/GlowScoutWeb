import { z } from "zod";




export const FilterSchema = z.object({
    goal: z.string({ message: "Please select a Filters." }),
  });
  
  export const SearchSchema = z.object({
    goal: z.string({ message: "Search not be empty" }),
  });
  
  export const BookSchema = z.object({
    goal: z.string({ message: "Please select a goal." }),
    location: z.string({ message: "Please select a location." }),
  });